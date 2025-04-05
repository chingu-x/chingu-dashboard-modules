import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { VoyageResourcesApiPort } from "@/voyage-resources/ports/secondary/voyage-resources-api-port";
import { AddVoyageResourceUsecaseDto } from "@/voyage-resources/application/dtos/usecase.dto";
import { AddVoyageResourceResponseDto } from "@/voyage-resources/application/dtos/response.dto";

@injectable()
export class AddVoyageResourceUsecase {
  constructor(
    @inject(TYPES.VoyageResourcesApiPort)
    private readonly voyageResourcesApi: VoyageResourcesApiPort,
  ) {}

  async execute(
    props: AddVoyageResourceUsecaseDto,
  ): Promise<AddVoyageResourceResponseDto> {
    return await this.voyageResourcesApi.addVoyageResource(props);
  }
}
