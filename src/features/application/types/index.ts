interface Category {
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
  createdAt: Date;
  updatedAt: Date;
  teamMemberId: number;
  category: Category;
  addedBy: {
    member: VoyageMember;
  };
}

export type FetchFeaturesList = {
  categoryId: number;
  categoryName: string;
  features: Features[];
}[];
