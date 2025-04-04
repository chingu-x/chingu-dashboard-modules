import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { VoyageResourcesApiPort } from "@/voyage-resources/ports/secondary/voyage-resources-api-port";
import { FetchVoyageResourcesUsecaseDto } from "@/voyage-resources/application/dtos/usecase.dto";
import { FetchVoyageResourcesResponseDto } from "@/voyage-resources/application/dtos/response.dto";

@injectable()
export class FetchVoyageResourcesUsecase {
  constructor(
    @inject(TYPES.VoyageResourcesApiPort)
    private readonly voyageResourcesApi: VoyageResourcesApiPort,
  ) {}

  async execute(
    props: FetchVoyageResourcesUsecaseDto,
  ): Promise<FetchVoyageResourcesResponseDto> {
    return await this.voyageResourcesApi.fetchVoyageResources(props);
  }
}
