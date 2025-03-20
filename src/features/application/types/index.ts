export interface Category {
  id: number;
  name: string;
}

export interface VoyageMember {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
}

export interface Features {
  id: number;
  description: string;
  order: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  teamMemberId: number;
  category: Category;
  addedBy: {
    member: VoyageMember;
  };
}

export type FeaturesList = {
  categoryId: number;
  categoryName: string;
  features: Features[];
}[];
