import http from "node:http";
import { AddressInfo } from "node:net";
import { config } from "./config/config";
import { ConsoleLogger } from "@/contexts/shared/logger/console-logger";
import { Logger } from "@/contexts/shared/logger/logger";
import app from "./app";

export class Server {
  private httpServer?: http.Server;
  private readonly logger: Logger;

  constructor() {
    this.logger = new ConsoleLogger();
  }

  async start(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = app.listen(config.server.port, () => {
        const { port } = this.httpServer?.address() as AddressInfo;
        this.logger.info(`App is ready and listening on port ${port} 🚀`);
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }
      return resolve();
    });
  }

  getHttpServer(): http.Server | undefined {
    return this.httpServer;
  }
}
