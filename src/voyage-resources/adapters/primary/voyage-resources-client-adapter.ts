import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { VoyageResourcesClientPort } from "@/voyage-resources/ports/primary/voyage-resources-client-port";
import {
  AddVoyageResourceClientRequestDto,
  DeleteVoyageResourceClientRequestDto,
  FetchVoyageResourcesClientRequestDto,
  GetTopFiveVoyageResourcesClientRequestDto,
  SortVoyageResourcesClientRequestDto,
} from "@/voyage-resources/application/dtos/request.dto";
import {
  AddVoyageResourceResponseDto,
  DeleteVoyageResourceResponseDto,
  FetchVoyageResourcesResponseDto,
  GetTopFiveVoyageResourcesResponseDto,
  SortVoyageResourcesResponseDto,
} from "@/voyage-resources/application/dtos/response.dto";
import { FetchVoyageResourcesUsecase } from "@/voyage-resources/application/usecases/fetch-voyage-resources-usecase";
import { AddVoyageResourceUsecase } from "@/voyage-resources/application/usecases/add-voyage-resource-usecase";
import { DeleteVoyageResourceUsecase } from "@/voyage-resources/application/usecases/delete-voyage-resource-usecase";
import { SortVoyageResourcesUsecase } from "@/voyage-resources/application/usecases/sort-voyage-resources-usecase";
import { GetTopFiveVoyageResourcesUsecase } from "@/voyage-resources/application/usecases/get-top-five-voyage-resources-usecase";

@injectable()
export class VoyageResourcesClientAdapter implements VoyageResourcesClientPort {
  constructor(
    @inject(TYPES.FetchVoyageResourcesUsecase)
    private readonly fetchVoyageResourcesUsecase: FetchVoyageResourcesUsecase,

    @inject(TYPES.AddVoyageResourceUsecase)
    private readonly addVoyageResourceUsecase: AddVoyageResourceUsecase,

    @inject(TYPES.DeleteVoyageResourceUsecase)
    private readonly deleteVoyageResourceUsecase: DeleteVoyageResourceUsecase,

    @inject(TYPES.SortVoyageResourcesUsecase)
    private readonly sortVoyageResourcesUsecase: SortVoyageResourcesUsecase,

    @inject(TYPES.GetTopFiveVoyageResourcesUsecase)
    private readonly getTopFiveVoyageResourcesUsecase: GetTopFiveVoyageResourcesUsecase,
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

  async deleteVoyageResource({
    resourceId,
  }: DeleteVoyageResourceClientRequestDto): Promise<DeleteVoyageResourceResponseDto> {
    return await this.deleteVoyageResourceUsecase.execute({
      resourceId,
    });
  }

  sortVoyageResources({
    order,
    voyageResources,
  }: SortVoyageResourcesClientRequestDto): SortVoyageResourcesResponseDto {
    return this.sortVoyageResourcesUsecase.execute({ order, voyageResources });
  }

  getTopFiveVoyageResources({
    voyageResources,
  }: GetTopFiveVoyageResourcesClientRequestDto): GetTopFiveVoyageResourcesResponseDto {
    return this.getTopFiveVoyageResourcesUsecase.execute({ voyageResources });
  }
}
