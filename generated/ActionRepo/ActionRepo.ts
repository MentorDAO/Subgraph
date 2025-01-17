// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ActionAdded extends ethereum.Event {
  get params(): ActionAdded__Params {
    return new ActionAdded__Params(this);
  }
}

export class ActionAdded__Params {
  _event: ActionAdded;

  constructor(event: ActionAdded) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get guid(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get subject(): string {
    return this._event.parameters[2].value.toString();
  }

  get verb(): string {
    return this._event.parameters[3].value.toString();
  }

  get object(): string {
    return this._event.parameters[4].value.toString();
  }

  get tool(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class ActionURI extends ethereum.Event {
  get params(): ActionURI__Params {
    return new ActionURI__Params(this);
  }
}

export class ActionURI__Params {
  _event: ActionURI;

  constructor(event: ActionURI) {
    this._event = event;
  }

  get guid(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get uri(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ContractURI extends ethereum.Event {
  get params(): ContractURI__Params {
    return new ContractURI__Params(this);
  }
}

export class ContractURI__Params {
  _event: ContractURI;

  constructor(event: ContractURI) {
    this._event = event;
  }

  get param0(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class GUIDCreated extends ethereum.Event {
  get params(): GUIDCreated__Params {
    return new GUIDCreated__Params(this);
  }
}

export class GUIDCreated__Params {
  _event: GUIDCreated;

  constructor(event: GUIDCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get guid(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class GUIDURIChange extends ethereum.Event {
  get params(): GUIDURIChange__Params {
    return new GUIDURIChange__Params(this);
  }
}

export class GUIDURIChange__Params {
  _event: GUIDURIChange;

  constructor(event: GUIDURIChange) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get guid(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferBatchByToken extends ethereum.Event {
  get params(): TransferBatchByToken__Params {
    return new TransferBatchByToken__Params(this);
  }
}

export class TransferBatchByToken__Params {
  _event: TransferBatchByToken;

  constructor(event: TransferBatchByToken) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fromOwnerToken(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get toOwnerToken(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferByToken extends ethereum.Event {
  get params(): TransferByToken__Params {
    return new TransferByToken__Params(this);
  }
}

export class TransferByToken__Params {
  _event: TransferByToken;

  constructor(event: TransferByToken) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fromOwnerToken(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get toOwnerToken(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ActionRepo__actionAddInputSvoStruct extends ethereum.Tuple {
  get subject(): string {
    return this[0].toString();
  }

  get verb(): string {
    return this[1].toString();
  }

  get object(): string {
    return this[2].toString();
  }

  get tool(): string {
    return this[3].toString();
  }
}

export class ActionRepo__actionAddBatchInputSvosStruct extends ethereum.Tuple {
  get subject(): string {
    return this[0].toString();
  }

  get verb(): string {
    return this[1].toString();
  }

  get object(): string {
    return this[2].toString();
  }

  get tool(): string {
    return this[3].toString();
  }
}

export class ActionRepo__actionGetResultValue0Struct extends ethereum.Tuple {
  get subject(): string {
    return this[0].toString();
  }

  get verb(): string {
    return this[1].toString();
  }

  get object(): string {
    return this[2].toString();
  }

  get tool(): string {
    return this[3].toString();
  }
}

export class ActionRepo__actionHashInputSvoStruct extends ethereum.Tuple {
  get subject(): string {
    return this[0].toString();
  }

  get verb(): string {
    return this[1].toString();
  }

  get object(): string {
    return this[2].toString();
  }

  get tool(): string {
    return this[3].toString();
  }
}

export class ActionRepo extends ethereum.SmartContract {
  static bind(address: Address): ActionRepo {
    return new ActionRepo("ActionRepo", address);
  }

  GUIDHas(account: Address, guid: Bytes): boolean {
    let result = super.call("GUIDHas", "GUIDHas(address,bytes32):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromFixedBytes(guid)
    ]);

    return result[0].toBoolean();
  }

  try_GUIDHas(account: Address, guid: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("GUIDHas", "GUIDHas(address,bytes32):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromFixedBytes(guid)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  GUIDHasByToken(soulToken: BigInt, guid: Bytes): boolean {
    let result = super.call(
      "GUIDHasByToken",
      "GUIDHasByToken(uint256,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(soulToken),
        ethereum.Value.fromFixedBytes(guid)
      ]
    );

    return result[0].toBoolean();
  }

  try_GUIDHasByToken(
    soulToken: BigInt,
    guid: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "GUIDHasByToken",
      "GUIDHasByToken(uint256,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(soulToken),
        ethereum.Value.fromFixedBytes(guid)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  GUIDURI(guid: Bytes): string {
    let result = super.call("GUIDURI", "GUIDURI(bytes32):(string)", [
      ethereum.Value.fromFixedBytes(guid)
    ]);

    return result[0].toString();
  }

  try_GUIDURI(guid: Bytes): ethereum.CallResult<string> {
    let result = super.tryCall("GUIDURI", "GUIDURI(bytes32):(string)", [
      ethereum.Value.fromFixedBytes(guid)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  actionAdd(svo: ActionRepo__actionAddInputSvoStruct, uri: string): Bytes {
    let result = super.call(
      "actionAdd",
      "actionAdd((string,string,string,string),string):(bytes32)",
      [ethereum.Value.fromTuple(svo), ethereum.Value.fromString(uri)]
    );

    return result[0].toBytes();
  }

  try_actionAdd(
    svo: ActionRepo__actionAddInputSvoStruct,
    uri: string
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "actionAdd",
      "actionAdd((string,string,string,string),string):(bytes32)",
      [ethereum.Value.fromTuple(svo), ethereum.Value.fromString(uri)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  actionAddBatch(
    svos: Array<ActionRepo__actionAddBatchInputSvosStruct>,
    uris: Array<string>
  ): Array<Bytes> {
    let result = super.call(
      "actionAddBatch",
      "actionAddBatch((string,string,string,string)[],string[]):(bytes32[])",
      [
        ethereum.Value.fromTupleArray(svos),
        ethereum.Value.fromStringArray(uris)
      ]
    );

    return result[0].toBytesArray();
  }

  try_actionAddBatch(
    svos: Array<ActionRepo__actionAddBatchInputSvosStruct>,
    uris: Array<string>
  ): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "actionAddBatch",
      "actionAddBatch((string,string,string,string)[],string[]):(bytes32[])",
      [
        ethereum.Value.fromTupleArray(svos),
        ethereum.Value.fromStringArray(uris)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  actionGet(guid: Bytes): ActionRepo__actionGetResultValue0Struct {
    let result = super.call(
      "actionGet",
      "actionGet(bytes32):((string,string,string,string))",
      [ethereum.Value.fromFixedBytes(guid)]
    );

    return changetype<ActionRepo__actionGetResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_actionGet(
    guid: Bytes
  ): ethereum.CallResult<ActionRepo__actionGetResultValue0Struct> {
    let result = super.tryCall(
      "actionGet",
      "actionGet(bytes32):((string,string,string,string))",
      [ethereum.Value.fromFixedBytes(guid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ActionRepo__actionGetResultValue0Struct>(value[0].toTuple())
    );
  }

  actionGetURI(guid: Bytes): string {
    let result = super.call("actionGetURI", "actionGetURI(bytes32):(string)", [
      ethereum.Value.fromFixedBytes(guid)
    ]);

    return result[0].toString();
  }

  try_actionGetURI(guid: Bytes): ethereum.CallResult<string> {
    let result = super.tryCall(
      "actionGetURI",
      "actionGetURI(bytes32):(string)",
      [ethereum.Value.fromFixedBytes(guid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  actionHash(svo: ActionRepo__actionHashInputSvoStruct): Bytes {
    let result = super.call(
      "actionHash",
      "actionHash((string,string,string,string)):(bytes32)",
      [ethereum.Value.fromTuple(svo)]
    );

    return result[0].toBytes();
  }

  try_actionHash(
    svo: ActionRepo__actionHashInputSvoStruct
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "actionHash",
      "actionHash((string,string,string,string)):(bytes32)",
      [ethereum.Value.fromTuple(svo)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  balanceOfToken(sbt: BigInt, id: BigInt): BigInt {
    let result = super.call(
      "balanceOfToken",
      "balanceOfToken(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(sbt),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOfToken(sbt: BigInt, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOfToken",
      "balanceOfToken(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(sbt),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  contractURI(): string {
    let result = super.call("contractURI", "contractURI():(string)", []);

    return result[0].toString();
  }

  try_contractURI(): ethereum.CallResult<string> {
    let result = super.tryCall("contractURI", "contractURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getExtTokenId(account: Address): BigInt {
    let result = super.call(
      "getExtTokenId",
      "getExtTokenId(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_getExtTokenId(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getExtTokenId",
      "getExtTokenId(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getHub(): Address {
    let result = super.call("getHub", "getHub():(address)", []);

    return result[0].toAddress();
  }

  try_getHub(): ethereum.CallResult<Address> {
    let result = super.tryCall("getHub", "getHub():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRepoAddr(): Address {
    let result = super.call("getRepoAddr", "getRepoAddr():(address)", []);

    return result[0].toAddress();
  }

  try_getRepoAddr(): ethereum.CallResult<Address> {
    let result = super.tryCall("getRepoAddr", "getRepoAddr():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTargetContract(): Address {
    let result = super.call(
      "getTargetContract",
      "getTargetContract():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getTargetContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTargetContract",
      "getTargetContract():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  uniqueMembers(id: BigInt): Array<BigInt> {
    let result = super.call(
      "uniqueMembers",
      "uniqueMembers(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return result[0].toBigIntArray();
  }

  try_uniqueMembers(id: BigInt): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "uniqueMembers",
      "uniqueMembers(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  uniqueMembersCount(id: BigInt): BigInt {
    let result = super.call(
      "uniqueMembersCount",
      "uniqueMembersCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return result[0].toBigInt();
  }

  try_uniqueMembersCount(id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "uniqueMembersCount",
      "uniqueMembersCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ActionAddCall extends ethereum.Call {
  get inputs(): ActionAddCall__Inputs {
    return new ActionAddCall__Inputs(this);
  }

  get outputs(): ActionAddCall__Outputs {
    return new ActionAddCall__Outputs(this);
  }
}

export class ActionAddCall__Inputs {
  _call: ActionAddCall;

  constructor(call: ActionAddCall) {
    this._call = call;
  }

  get svo(): ActionAddCallSvoStruct {
    return changetype<ActionAddCallSvoStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get uri(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ActionAddCall__Outputs {
  _call: ActionAddCall;

  constructor(call: ActionAddCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ActionAddCallSvoStruct extends ethereum.Tuple {
  get subject(): string {
    return this[0].toString();
  }

  get verb(): string {
    return this[1].toString();
  }

  get object(): string {
    return this[2].toString();
  }

  get tool(): string {
    return this[3].toString();
  }
}

export class ActionAddBatchCall extends ethereum.Call {
  get inputs(): ActionAddBatchCall__Inputs {
    return new ActionAddBatchCall__Inputs(this);
  }

  get outputs(): ActionAddBatchCall__Outputs {
    return new ActionAddBatchCall__Outputs(this);
  }
}

export class ActionAddBatchCall__Inputs {
  _call: ActionAddBatchCall;

  constructor(call: ActionAddBatchCall) {
    this._call = call;
  }

  get svos(): Array<ActionAddBatchCallSvosStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      ActionAddBatchCallSvosStruct
    >();
  }

  get uris(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }
}

export class ActionAddBatchCall__Outputs {
  _call: ActionAddBatchCall;

  constructor(call: ActionAddBatchCall) {
    this._call = call;
  }

  get value0(): Array<Bytes> {
    return this._call.outputValues[0].value.toBytesArray();
  }
}

export class ActionAddBatchCallSvosStruct extends ethereum.Tuple {
  get subject(): string {
    return this[0].toString();
  }

  get verb(): string {
    return this[1].toString();
  }

  get object(): string {
    return this[2].toString();
  }

  get tool(): string {
    return this[3].toString();
  }
}

export class ActionSetURICall extends ethereum.Call {
  get inputs(): ActionSetURICall__Inputs {
    return new ActionSetURICall__Inputs(this);
  }

  get outputs(): ActionSetURICall__Outputs {
    return new ActionSetURICall__Outputs(this);
  }
}

export class ActionSetURICall__Inputs {
  _call: ActionSetURICall;

  constructor(call: ActionSetURICall) {
    this._call = call;
  }

  get guid(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get uri(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ActionSetURICall__Outputs {
  _call: ActionSetURICall;

  constructor(call: ActionSetURICall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get hub(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetHubCall extends ethereum.Call {
  get inputs(): SetHubCall__Inputs {
    return new SetHubCall__Inputs(this);
  }

  get outputs(): SetHubCall__Outputs {
    return new SetHubCall__Outputs(this);
  }
}

export class SetHubCall__Inputs {
  _call: SetHubCall;

  constructor(call: SetHubCall) {
    this._call = call;
  }

  get hubAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetHubCall__Outputs {
  _call: SetHubCall;

  constructor(call: SetHubCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
