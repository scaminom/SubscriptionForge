export interface Plan {
  id: string;
  name: string;
  description?: string | null;
  stripeId?: string | null;
  title?: string | null;
  isActive: boolean;
  isNew: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
  ctaButtonCopy?: string | null;
  ctaButtonStyle?: string | null;
  ctaButtonLink?: string | null;
  highlightsTitle?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
