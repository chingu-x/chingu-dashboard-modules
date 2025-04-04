import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { VoyageResourcesClientPort } from "@/voyage-resources/ports/primary/voyage-resources-client-port";
import {
  AddVoyageResourceClientRequestDto,
  FetchVoyageResourcesClientRequestDto,
} from "@/voyage-resources/application/dtos/request.dto";
import {
  AddVoyageResourceResponseDto,
  FetchVoyageResourcesResponseDto,
} from "@/voyage-resources/application/dtos/response.dto";
import { FetchVoyageResourcesUsecase } from "@/voyage-resources/application/usecases/fetch-voyage-resources-usecase";
import { AddVoyageResourceUsecase } from "@/voyage-resources/application/usecases/add-voyage-resource-usecase";

@injectable()
export class VoyageResourcesClientAdapter implements VoyageResourcesClientPort {
  constructor(
    @inject(TYPES.FetchVoyageResourcesUsecase)
    private readonly fetchVoyageResourcesUsecase: FetchVoyageResourcesUsecase,

    @inject(TYPES.AddVoyageResourceUsecase)
    private readonly addVoyageResourceUsecase: AddVoyageResourceUsecase,
  ) {}

  async fetchVoyageResources({
    teamId,
  }: FetchVoyageResourcesClientRequestDto): Promise<FetchVoyageResourcesResponseDto> {
    return await this.fetchVoyageResourcesUsecase.execute({ teamId });
  }

  async addVoyageResource({
    teamId,
    url,
    title,
  }: AddVoyageResourceClientRequestDto): Promise<AddVoyageResourceResponseDto> {
    return await this.addVoyageResourceUsecase.execute({ teamId, url, title });
  }
}
