/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../../../../common";

export interface IVRFMigratableConsumerV2PlusInterface extends Interface {
  getFunction(
    nameOrSignature: "setCoordinator" | "setCoordinator(address)"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "CoordinatorSet" | "CoordinatorSet(address)"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "setCoordinator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCoordinator(address)",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "setCoordinator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCoordinator(address)",
    data: BytesLike
  ): Result;
}

export namespace CoordinatorSetEvent {
  export type InputTuple = [vrfCoordinator: AddressLike];
  export type OutputTuple = [vrfCoordinator: string];
  export interface OutputObject {
    vrfCoordinator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IVRFMigratableConsumerV2Plus extends BaseContract {
  connect(runner?: ContractRunner | null): IVRFMigratableConsumerV2Plus;
  waitForDeployment(): Promise<this>;

  interface: IVRFMigratableConsumerV2PlusInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  setCoordinator: TypedContractMethod<
    [vrfCoordinator: AddressLike],
    [void],
    "nonpayable"
  >;

  "setCoordinator(address)": TypedContractMethod<
    [vrfCoordinator: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "setCoordinator"
  ): TypedContractMethod<[vrfCoordinator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setCoordinator(address)"
  ): TypedContractMethod<[vrfCoordinator: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "CoordinatorSet"
  ): TypedContractEvent<
    CoordinatorSetEvent.InputTuple,
    CoordinatorSetEvent.OutputTuple,
    CoordinatorSetEvent.OutputObject
  >;
  getEvent(
    key: "CoordinatorSet(address)"
  ): TypedContractEvent<
    CoordinatorSet_address_Event.InputTuple,
    CoordinatorSet_address_Event.OutputTuple,
    CoordinatorSet_address_Event.OutputObject
  >;

  filters: {
    "CoordinatorSet(address)": TypedContractEvent<
      CoordinatorSetEvent.InputTuple,
      CoordinatorSetEvent.OutputTuple,
      CoordinatorSetEvent.OutputObject
    >;
    CoordinatorSet: TypedContractEvent<
      CoordinatorSetEvent.InputTuple,
      CoordinatorSetEvent.OutputTuple,
      CoordinatorSetEvent.OutputObject
    >;
  };
}
