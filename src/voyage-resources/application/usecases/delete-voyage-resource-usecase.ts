import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { VoyageResourcesApiPort } from "@/voyage-resources/ports/secondary/voyage-resources-api-port";
import { DeleteVoyageResourceUsecaseDto } from "@/voyage-resources/application/dtos/usecase.dto";
import { DeleteVoyageResourceResponseDto } from "@/voyage-resources/application/dtos/response.dto";

@injectable()
export class DeleteVoyageResourceUsecase {
  constructor(
    @inject(TYPES.VoyageResourcesApiPort)
    private readonly voyageResourcesApi: VoyageResourcesApiPort,
  ) {}

  async execute(
    props: DeleteVoyageResourceUsecaseDto,
  ): Promise<DeleteVoyageResourceResponseDto> {
    return await this.voyageResourcesApi.deleteVoyageResource(props);
  }
}
