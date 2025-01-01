/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
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
} from "../common";

export interface RaffleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "acceptOwnership()"
      | "checkUpkeep"
      | "checkUpkeep(bytes)"
      | "enterRaffle"
      | "enterRaffle()"
      | "get_EntranceFee"
      | "get_EntranceFee()"
      | "get_Interval"
      | "get_Interval()"
      | "get_LastTimestamp"
      | "get_LastTimestamp()"
      | "get_NumWords"
      | "get_NumWords()"
      | "get_NumberOfPlayers"
      | "get_NumberOfPlayers()"
      | "get_Player"
      | "get_Player(uint256)"
      | "get_RaffleState"
      | "get_RaffleState()"
      | "get_RecentWinner"
      | "get_RecentWinner()"
      | "get_RequestConfirmations"
      | "get_RequestConfirmations()"
      | "get_SubId"
      | "get_SubId()"
      | "owner"
      | "owner()"
      | "performUpkeep"
      | "performUpkeep(bytes)"
      | "rawFulfillRandomWords"
      | "rawFulfillRandomWords(uint256,uint256[])"
      | "s_vrfCoordinator"
      | "s_vrfCoordinator()"
      | "setCoordinator"
      | "setCoordinator(address)"
      | "transferOwnership"
      | "transferOwnership(address)"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CoordinatorSet"
      | "CoordinatorSet(address)"
      | "OwnershipTransferRequested"
      | "OwnershipTransferRequested(address,address)"
      | "OwnershipTransferred"
      | "OwnershipTransferred(address,address)"
      | "RaffelEnter"
      | "RaffelEnter(address)"
      | "RequestedRaffleWinner"
      | "RequestedRaffleWinner(uint256)"
      | "WinnerPicked"
      | "WinnerPicked(address)"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "checkUpkeep(bytes)",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "enterRaffle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enterRaffle()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_EntranceFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_EntranceFee()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_Interval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_Interval()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_LastTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_LastTimestamp()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_NumWords",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_NumWords()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_NumberOfPlayers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_NumberOfPlayers()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_Player",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_Player(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get_RaffleState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_RaffleState()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_RecentWinner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_RecentWinner()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_RequestConfirmations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_RequestConfirmations()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "get_SubId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "get_SubId()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "performUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "performUpkeep(bytes)",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords(uint256,uint256[])",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "s_vrfCoordinator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_vrfCoordinator()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCoordinator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCoordinator(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkUpkeep(bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enterRaffle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enterRaffle()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_EntranceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_EntranceFee()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_Interval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_Interval()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_LastTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_LastTimestamp()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_NumWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_NumWords()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_NumberOfPlayers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_NumberOfPlayers()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get_Player", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "get_Player(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_RaffleState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_RaffleState()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_RecentWinner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_RecentWinner()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_RequestConfirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_RequestConfirmations()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get_SubId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "get_SubId()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep(bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords(uint256,uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_vrfCoordinator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_vrfCoordinator()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCoordinator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCoordinator(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address)",
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

export namespace OwnershipTransferRequestedEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RaffelEnterEvent {
  export type InputTuple = [player: AddressLike];
  export type OutputTuple = [player: string];
  export interface OutputObject {
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RequestedRaffleWinnerEvent {
  export type InputTuple = [requestId: BigNumberish];
  export type OutputTuple = [requestId: bigint];
  export interface OutputObject {
    requestId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WinnerPickedEvent {
  export type InputTuple = [winner: AddressLike];
  export type OutputTuple = [winner: string];
  export interface OutputObject {
    winner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Raffle extends BaseContract {
  connect(runner?: ContractRunner | null): Raffle;
  waitForDeployment(): Promise<this>;

  interface: RaffleInterface;

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

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  "acceptOwnership()": TypedContractMethod<[], [void], "nonpayable">;

  checkUpkeep: TypedContractMethod<
    [arg0: BytesLike],
    [[boolean, string] & { upkeepNeeded: boolean }],
    "view"
  >;

  "checkUpkeep(bytes)": TypedContractMethod<
    [arg0: BytesLike],
    [[boolean, string] & { upkeepNeeded: boolean }],
    "view"
  >;

  enterRaffle: TypedContractMethod<[], [void], "payable">;

  "enterRaffle()": TypedContractMethod<[], [void], "payable">;

  get_EntranceFee: TypedContractMethod<[], [bigint], "view">;

  "get_EntranceFee()": TypedContractMethod<[], [bigint], "view">;

  get_Interval: TypedContractMethod<[], [bigint], "view">;

  "get_Interval()": TypedContractMethod<[], [bigint], "view">;

  get_LastTimestamp: TypedContractMethod<[], [bigint], "view">;

  "get_LastTimestamp()": TypedContractMethod<[], [bigint], "view">;

  get_NumWords: TypedContractMethod<[], [bigint], "view">;

  "get_NumWords()": TypedContractMethod<[], [bigint], "view">;

  get_NumberOfPlayers: TypedContractMethod<[], [bigint], "view">;

  "get_NumberOfPlayers()": TypedContractMethod<[], [bigint], "view">;

  get_Player: TypedContractMethod<[index: BigNumberish], [string], "view">;

  "get_Player(uint256)": TypedContractMethod<
    [index: BigNumberish],
    [string],
    "view"
  >;

  get_RaffleState: TypedContractMethod<[], [bigint], "view">;

  "get_RaffleState()": TypedContractMethod<[], [bigint], "view">;

  get_RecentWinner: TypedContractMethod<[], [string], "view">;

  "get_RecentWinner()": TypedContractMethod<[], [string], "view">;

  get_RequestConfirmations: TypedContractMethod<[], [bigint], "view">;

  "get_RequestConfirmations()": TypedContractMethod<[], [bigint], "view">;

  get_SubId: TypedContractMethod<[], [bigint], "view">;

  "get_SubId()": TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  "owner()": TypedContractMethod<[], [string], "view">;

  performUpkeep: TypedContractMethod<[arg0: BytesLike], [void], "nonpayable">;

  "performUpkeep(bytes)": TypedContractMethod<
    [arg0: BytesLike],
    [void],
    "nonpayable"
  >;

  rawFulfillRandomWords: TypedContractMethod<
    [requestId: BigNumberish, randomWords: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  "rawFulfillRandomWords(uint256,uint256[])": TypedContractMethod<
    [requestId: BigNumberish, randomWords: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  s_vrfCoordinator: TypedContractMethod<[], [string], "view">;

  "s_vrfCoordinator()": TypedContractMethod<[], [string], "view">;

  setCoordinator: TypedContractMethod<
    [_vrfCoordinator: AddressLike],
    [void],
    "nonpayable"
  >;

  "setCoordinator(address)": TypedContractMethod<
    [_vrfCoordinator: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [to: AddressLike],
    [void],
    "nonpayable"
  >;

  "transferOwnership(address)": TypedContractMethod<
    [to: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "acceptOwnership()"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkUpkeep"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [[boolean, string] & { upkeepNeeded: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "checkUpkeep(bytes)"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [[boolean, string] & { upkeepNeeded: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "enterRaffle"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "enterRaffle()"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "get_EntranceFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_EntranceFee()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_Interval"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_Interval()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_LastTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_LastTimestamp()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_NumWords"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_NumWords()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_NumberOfPlayers"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_NumberOfPlayers()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_Player"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "get_Player(uint256)"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "get_RaffleState"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_RaffleState()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_RecentWinner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "get_RecentWinner()"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "get_RequestConfirmations"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_RequestConfirmations()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_SubId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "get_SubId()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner()"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "performUpkeep"
  ): TypedContractMethod<[arg0: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "performUpkeep(bytes)"
  ): TypedContractMethod<[arg0: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rawFulfillRandomWords"
  ): TypedContractMethod<
    [requestId: BigNumberish, randomWords: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rawFulfillRandomWords(uint256,uint256[])"
  ): TypedContractMethod<
    [requestId: BigNumberish, randomWords: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "s_vrfCoordinator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "s_vrfCoordinator()"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setCoordinator"
  ): TypedContractMethod<[_vrfCoordinator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setCoordinator(address)"
  ): TypedContractMethod<[_vrfCoordinator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership(address)"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;

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
  getEvent(
    key: "OwnershipTransferRequested"
  ): TypedContractEvent<
    OwnershipTransferRequestedEvent.InputTuple,
    OwnershipTransferRequestedEvent.OutputTuple,
    OwnershipTransferRequestedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferRequested(address,address)"
  ): TypedContractEvent<
    OwnershipTransferRequested_address_address_Event.InputTuple,
    OwnershipTransferRequested_address_address_Event.OutputTuple,
    OwnershipTransferRequested_address_address_Event.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred(address,address)"
  ): TypedContractEvent<
    OwnershipTransferred_address_address_Event.InputTuple,
    OwnershipTransferred_address_address_Event.OutputTuple,
    OwnershipTransferred_address_address_Event.OutputObject
  >;
  getEvent(
    key: "RaffelEnter"
  ): TypedContractEvent<
    RaffelEnterEvent.InputTuple,
    RaffelEnterEvent.OutputTuple,
    RaffelEnterEvent.OutputObject
  >;
  getEvent(
    key: "RaffelEnter(address)"
  ): TypedContractEvent<
    RaffelEnter_address_Event.InputTuple,
    RaffelEnter_address_Event.OutputTuple,
    RaffelEnter_address_Event.OutputObject
  >;
  getEvent(
    key: "RequestedRaffleWinner"
  ): TypedContractEvent<
    RequestedRaffleWinnerEvent.InputTuple,
    RequestedRaffleWinnerEvent.OutputTuple,
    RequestedRaffleWinnerEvent.OutputObject
  >;
  getEvent(
    key: "RequestedRaffleWinner(uint256)"
  ): TypedContractEvent<
    RequestedRaffleWinner_uint256_Event.InputTuple,
    RequestedRaffleWinner_uint256_Event.OutputTuple,
    RequestedRaffleWinner_uint256_Event.OutputObject
  >;
  getEvent(
    key: "WinnerPicked"
  ): TypedContractEvent<
    WinnerPickedEvent.InputTuple,
    WinnerPickedEvent.OutputTuple,
    WinnerPickedEvent.OutputObject
  >;
  getEvent(
    key: "WinnerPicked(address)"
  ): TypedContractEvent<
    WinnerPicked_address_Event.InputTuple,
    WinnerPicked_address_Event.OutputTuple,
    WinnerPicked_address_Event.OutputObject
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

    "OwnershipTransferRequested(address,address)": TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;
    OwnershipTransferRequested: TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RaffelEnter(address)": TypedContractEvent<
      RaffelEnterEvent.InputTuple,
      RaffelEnterEvent.OutputTuple,
      RaffelEnterEvent.OutputObject
    >;
    RaffelEnter: TypedContractEvent<
      RaffelEnterEvent.InputTuple,
      RaffelEnterEvent.OutputTuple,
      RaffelEnterEvent.OutputObject
    >;

    "RequestedRaffleWinner(uint256)": TypedContractEvent<
      RequestedRaffleWinnerEvent.InputTuple,
      RequestedRaffleWinnerEvent.OutputTuple,
      RequestedRaffleWinnerEvent.OutputObject
    >;
    RequestedRaffleWinner: TypedContractEvent<
      RequestedRaffleWinnerEvent.InputTuple,
      RequestedRaffleWinnerEvent.OutputTuple,
      RequestedRaffleWinnerEvent.OutputObject
    >;

    "WinnerPicked(address)": TypedContractEvent<
      WinnerPickedEvent.InputTuple,
      WinnerPickedEvent.OutputTuple,
      WinnerPickedEvent.OutputObject
    >;
    WinnerPicked: TypedContractEvent<
      WinnerPickedEvent.InputTuple,
      WinnerPickedEvent.OutputTuple,
      WinnerPickedEvent.OutputObject
    >;
  };
}
