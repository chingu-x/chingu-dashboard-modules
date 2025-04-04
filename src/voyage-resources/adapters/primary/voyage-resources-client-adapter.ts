import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { VoyageResourcesClientPort } from "@/voyage-resources/ports/primary/voyage-resources-client-port";
import { FetchVoyageResourcesClientRequestDto } from "@/voyage-resources/application/dtos/request.dto";
import { FetchVoyageResourcesResponseDto } from "@/voyage-resources/application/dtos/response.dto";

@injectable()
export class VoyageResourcesClientAdapter implements VoyageResourcesClientPort {
  constructor(
    @inject(TYPES.FetchVoyageResourcesUsecase)
    private readonly fetchVoyageResourcesUsecase: FetchVoyageResourcesUsecase,
  ) {}

  async fetchVoyageResources({
    teamId,
  }: FetchVoyageResourcesClientRequestDto): Promise<FetchVoyageResourcesResponseDto> {
    return await this.fetchVoyageResourcesUsecase.execute({ teamId });
  }
}
