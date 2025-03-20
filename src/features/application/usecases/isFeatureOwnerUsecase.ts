import { injectable } from "tsyringe";
import { IsFeatureOwnerUsecaseDto } from "@/features/application/dtos/usecase.dto";
import { IsFeatureOwnerClientResponseDto } from "@/features/application/dtos/response.dto";

@injectable()
export class IsFeatureOwnerUsecase {
  execute({
    userId,
    addedById,
  }: IsFeatureOwnerUsecaseDto): IsFeatureOwnerClientResponseDto {
    return userId === addedById;
  }
}
