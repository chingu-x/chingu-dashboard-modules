import { injectable } from "tsyringe";
import { GetTopFiveVoyageResourcesUsecaseDto } from "@/voyage-resources/application/dtos/usecase.dto";
import { GetTopFiveVoyageResourcesResponseDto } from "@/voyage-resources/application/dtos/response.dto";

@injectable()
export class GetTopFiveVoyageResourcesUsecase {
  execute({
    voyageResources,
  }: GetTopFiveVoyageResourcesUsecaseDto): GetTopFiveVoyageResourcesResponseDto {
    const topFiveResources = [...voyageResources]
      .sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);

        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 5);

    return topFiveResources;
  }
}
