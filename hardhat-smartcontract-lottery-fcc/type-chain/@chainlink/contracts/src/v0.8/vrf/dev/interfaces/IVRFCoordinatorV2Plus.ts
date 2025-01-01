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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../../../../common";

export declare namespace VRFV2PlusClient {
  export type RandomWordsRequestStruct = {
    keyHash: BytesLike;
    subId: BigNumberish;
    requestConfirmations: BigNumberish;
    callbackGasLimit: BigNumberish;
    numWords: BigNumberish;
    extraArgs: BytesLike;
  };

  export type RandomWordsRequestStructOutput = [
    keyHash: string,
    subId: bigint,
    requestConfirmations: bigint,
    callbackGasLimit: bigint,
    numWords: bigint,
    extraArgs: string
  ] & {
    keyHash: string;
    subId: bigint;
    requestConfirmations: bigint;
    callbackGasLimit: bigint;
    numWords: bigint;
    extraArgs: string;
  };
}

export interface IVRFCoordinatorV2PlusInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptSubscriptionOwnerTransfer"
      | "acceptSubscriptionOwnerTransfer(uint256)"
      | "addConsumer"
      | "addConsumer(uint256,address)"
      | "cancelSubscription"
      | "cancelSubscription(uint256,address)"
      | "createSubscription"
      | "createSubscription()"
      | "fundSubscriptionWithNative"
      | "fundSubscriptionWithNative(uint256)"
      | "getActiveSubscriptionIds"
      | "getActiveSubscriptionIds(uint256,uint256)"
      | "getSubscription"
      | "getSubscription(uint256)"
      | "pendingRequestExists"
      | "pendingRequestExists(uint256)"
      | "removeConsumer"
      | "removeConsumer(uint256,address)"
      | "requestRandomWords"
      | "requestRandomWords((bytes32,uint256,uint16,uint32,uint32,bytes))"
      | "requestSubscriptionOwnerTransfer"
      | "requestSubscriptionOwnerTransfer(uint256,address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptSubscriptionOwnerTransfer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "acceptSubscriptionOwnerTransfer(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addConsumer",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addConsumer(uint256,address)",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelSubscription",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelSubscription(uint256,address)",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createSubscription",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createSubscription()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fundSubscriptionWithNative",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fundSubscriptionWithNative(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveSubscriptionIds",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveSubscriptionIds(uint256,uint256)",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscription",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscription(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRequestExists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRequestExists(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeConsumer",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeConsumer(uint256,address)",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values: [VRFV2PlusClient.RandomWordsRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords((bytes32,uint256,uint16,uint32,uint32,bytes))",
    values: [VRFV2PlusClient.RandomWordsRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "requestSubscriptionOwnerTransfer",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestSubscriptionOwnerTransfer(uint256,address)",
    values: [BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptSubscriptionOwnerTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptSubscriptionOwnerTransfer(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addConsumer(uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelSubscription(uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSubscription()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundSubscriptionWithNative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundSubscriptionWithNative(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveSubscriptionIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveSubscriptionIds(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscription(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingRequestExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingRequestExists(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeConsumer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeConsumer(uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords((bytes32,uint256,uint16,uint32,uint32,bytes))",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestSubscriptionOwnerTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestSubscriptionOwnerTransfer(uint256,address)",
    data: BytesLike
  ): Result;
}

export interface IVRFCoordinatorV2Plus extends BaseContract {
  connect(runner?: ContractRunner | null): IVRFCoordinatorV2Plus;
  waitForDeployment(): Promise<this>;

  interface: IVRFCoordinatorV2PlusInterface;

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

  acceptSubscriptionOwnerTransfer: TypedContractMethod<
    [subId: BigNumberish],
    [void],
    "nonpayable"
  >;

  "acceptSubscriptionOwnerTransfer(uint256)": TypedContractMethod<
    [subId: BigNumberish],
    [void],
    "nonpayable"
  >;

  addConsumer: TypedContractMethod<
    [subId: BigNumberish, consumer: AddressLike],
    [void],
    "nonpayable"
  >;

  "addConsumer(uint256,address)": TypedContractMethod<
    [subId: BigNumberish, consumer: AddressLike],
    [void],
    "nonpayable"
  >;

  cancelSubscription: TypedContractMethod<
    [subId: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;

  "cancelSubscription(uint256,address)": TypedContractMethod<
    [subId: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;

  createSubscription: TypedContractMethod<[], [bigint], "nonpayable">;

  "createSubscription()": TypedContractMethod<[], [bigint], "nonpayable">;

  fundSubscriptionWithNative: TypedContractMethod<
    [subId: BigNumberish],
    [void],
    "payable"
  >;

  "fundSubscriptionWithNative(uint256)": TypedContractMethod<
    [subId: BigNumberish],
    [void],
    "payable"
  >;

  getActiveSubscriptionIds: TypedContractMethod<
    [startIndex: BigNumberish, maxCount: BigNumberish],
    [bigint[]],
    "view"
  >;

  "getActiveSubscriptionIds(uint256,uint256)": TypedContractMethod<
    [startIndex: BigNumberish, maxCount: BigNumberish],
    [bigint[]],
    "view"
  >;

  getSubscription: TypedContractMethod<
    [subId: BigNumberish],
    [
      [bigint, bigint, bigint, string, string[]] & {
        balance: bigint;
        nativeBalance: bigint;
        reqCount: bigint;
        owner: string;
        consumers: string[];
      }
    ],
    "view"
  >;

  "getSubscription(uint256)": TypedContractMethod<
    [subId: BigNumberish],
    [
      [bigint, bigint, bigint, string, string[]] & {
        balance: bigint;
        nativeBalance: bigint;
        reqCount: bigint;
        owner: string;
        consumers: string[];
      }
    ],
    "view"
  >;

  pendingRequestExists: TypedContractMethod<
    [subId: BigNumberish],
    [boolean],
    "view"
  >;

  "pendingRequestExists(uint256)": TypedContractMethod<
    [subId: BigNumberish],
    [boolean],
    "view"
  >;

  removeConsumer: TypedContractMethod<
    [subId: BigNumberish, consumer: AddressLike],
    [void],
    "nonpayable"
  >;

  "removeConsumer(uint256,address)": TypedContractMethod<
    [subId: BigNumberish, consumer: AddressLike],
    [void],
    "nonpayable"
  >;

  requestRandomWords: TypedContractMethod<
    [req: VRFV2PlusClient.RandomWordsRequestStruct],
    [bigint],
    "nonpayable"
  >;

  "requestRandomWords((bytes32,uint256,uint16,uint32,uint32,bytes))": TypedContractMethod<
    [req: VRFV2PlusClient.RandomWordsRequestStruct],
    [bigint],
    "nonpayable"
  >;

  requestSubscriptionOwnerTransfer: TypedContractMethod<
    [subId: BigNumberish, newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  "requestSubscriptionOwnerTransfer(uint256,address)": TypedContractMethod<
    [subId: BigNumberish, newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptSubscriptionOwnerTransfer"
  ): TypedContractMethod<[subId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "acceptSubscriptionOwnerTransfer(uint256)"
  ): TypedContractMethod<[subId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addConsumer"
  ): TypedContractMethod<
    [subId: BigNumberish, consumer: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addConsumer(uint256,address)"
  ): TypedContractMethod<
    [subId: BigNumberish, consumer: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cancelSubscription"
  ): TypedContractMethod<
    [subId: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cancelSubscription(uint256,address)"
  ): TypedContractMethod<
    [subId: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createSubscription"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "createSubscription()"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "fundSubscriptionWithNative"
  ): TypedContractMethod<[subId: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "fundSubscriptionWithNative(uint256)"
  ): TypedContractMethod<[subId: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "getActiveSubscriptionIds"
  ): TypedContractMethod<
    [startIndex: BigNumberish, maxCount: BigNumberish],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getActiveSubscriptionIds(uint256,uint256)"
  ): TypedContractMethod<
    [startIndex: BigNumberish, maxCount: BigNumberish],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSubscription"
  ): TypedContractMethod<
    [subId: BigNumberish],
    [
      [bigint, bigint, bigint, string, string[]] & {
        balance: bigint;
        nativeBalance: bigint;
        reqCount: bigint;
        owner: string;
        consumers: string[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSubscription(uint256)"
  ): TypedContractMethod<
    [subId: BigNumberish],
    [
      [bigint, bigint, bigint, string, string[]] & {
        balance: bigint;
        nativeBalance: bigint;
        reqCount: bigint;
        owner: string;
        consumers: string[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "pendingRequestExists"
  ): TypedContractMethod<[subId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "pendingRequestExists(uint256)"
  ): TypedContractMethod<[subId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeConsumer"
  ): TypedContractMethod<
    [subId: BigNumberish, consumer: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeConsumer(uint256,address)"
  ): TypedContractMethod<
    [subId: BigNumberish, consumer: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestRandomWords"
  ): TypedContractMethod<
    [req: VRFV2PlusClient.RandomWordsRequestStruct],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestRandomWords((bytes32,uint256,uint16,uint32,uint32,bytes))"
  ): TypedContractMethod<
    [req: VRFV2PlusClient.RandomWordsRequestStruct],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestSubscriptionOwnerTransfer"
  ): TypedContractMethod<
    [subId: BigNumberish, newOwner: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestSubscriptionOwnerTransfer(uint256,address)"
  ): TypedContractMethod<
    [subId: BigNumberish, newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}
