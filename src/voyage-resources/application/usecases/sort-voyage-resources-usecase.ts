import { injectable } from "tsyringe";
import { SortVoyageResourcesUsecaseDto } from "@/voyage-resources/application/dtos/usecase.dto";
import { SortVoyageResourcesResponseDto } from "@/voyage-resources/application/dtos/response.dto";

@injectable()
export class SortVoyageResourcesUsecase {
  execute({
    order,
    voyageResources,
  }: SortVoyageResourcesUsecaseDto): SortVoyageResourcesResponseDto {
    return voyageResources.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      if (order === "ASC") return dateA.getTime() - dateB.getTime();

      return dateB.getTime() - dateA.getTime();
    });
  }
}
