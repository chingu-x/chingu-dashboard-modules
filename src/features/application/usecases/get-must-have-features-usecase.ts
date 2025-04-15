import { injectable } from "tsyringe";
import { GetMustHaveFeaturesUsecaseDto } from "@/features/application/dtos/usecase.dto";
import { GetMustHaveFeaturesResponseDto } from "@/features/application/dtos/response.dto";

@injectable()
export class GetMustHaveFeaturesUsecase {
  execute({
    features,
  }: GetMustHaveFeaturesUsecaseDto): GetMustHaveFeaturesResponseDto {
    return features
      .filter((item) => item.category.name === "must have")
      .map((feature) => feature.description);
  }
}
