import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesApiPort } from "@/features/ports/secondary/features-api-port";
import { FetchFeaturesUsecaseDto } from "@/features/application/dtos/usecase.dto";
import {
  FetchFeaturesApiResponseDto,
  FetchFeaturesClientResponseDto,
} from "@/features/application/dtos/response.dto";

@injectable()
export class FetchFeaturesUsecase {
  constructor(
    @inject(TYPES.FeaturesApiPort)
    private readonly featuresApi: FeaturesApiPort,
  ) {}

  async execute({
    teamId,
  }: FetchFeaturesUsecaseDto): Promise<FetchFeaturesClientResponseDto> {
    const features = await this.featuresApi.fetchFeatures({ teamId });

    return transformData(features);
  }
}

function transformData(
  features: FetchFeaturesApiResponseDto,
): FetchFeaturesClientResponseDto {
  const transformedData: FetchFeaturesClientResponseDto = [
    {
      categoryId: 1,
      categoryName: "must have",
      features: [],
    },
    {
      categoryId: 2,
      categoryName: "should have",
      features: [],
    },
    {
      categoryId: 3,
      categoryName: "nice to have",
      features: [],
    },
  ];

  features.forEach((feature) => {
    const {
      id,
      description,
      order,
      teamMemberId,
      category,
      addedBy,
      createdAt,
      updatedAt,
    } = feature;

    const existingCategory = transformedData.find(
      (item) => item.categoryId === category.id,
    );

    if (existingCategory) {
      existingCategory.features.push({
        id,
        description,
        order,
        teamMemberId,
        category,
        addedBy,
        createdAt,
        updatedAt,
      });
    }
  });

  return transformedData;
}
