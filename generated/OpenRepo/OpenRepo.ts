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

export class AddressAdd extends ethereum.Event {
  get params(): AddressAdd__Params {
    return new AddressAdd__Params(this);
  }
}

export class AddressAdd__Params {
  _event: AddressAdd;

  constructor(event: AddressAdd) {
    this._event = event;
  }

  get originAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get key(): string {
    return this._event.parameters[1].value.toString();
  }

  get destinationAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class AddressRemoved extends ethereum.Event {
  get params(): AddressRemoved__Params {
    return new AddressRemoved__Params(this);
  }
}

export class AddressRemoved__Params {
  _event: AddressRemoved;

  constructor(event: AddressRemoved) {
    this._event = event;
  }

  get originAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get key(): string {
    return this._event.parameters[1].value.toString();
  }

  get destinationAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class AddressSet extends ethereum.Event {
  get params(): AddressSet__Params {
    return new AddressSet__Params(this);
  }
}

export class AddressSet__Params {
  _event: AddressSet;

  constructor(event: AddressSet) {
    this._event = event;
  }

  get originAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get key(): string {
    return this._event.parameters[1].value.toString();
  }

  get destinationAddress(): Address {
    return this._event.parameters[2].value.toAddress();
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

export class BoolAdd extends ethereum.Event {
  get params(): BoolAdd__Params {
    return new BoolAdd__Params(this);
  }
}

export class BoolAdd__Params {
  _event: BoolAdd;

  constructor(event: BoolAdd) {
    this._event = event;
  }

  get originContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get key(): string {
    return this._event.parameters[1].value.toString();
  }

  get value(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BoolRemoved extends ethereum.Event {
  get params(): BoolRemoved__Params {
    return new BoolRemoved__Params(this);
  }
}

export class BoolRemoved__Params {
  _event: BoolRemoved;

  constructor(event: BoolRemoved) {
    this._event = event;
  }

  get originContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get key(): string {
    return this._event.parameters[1].value.toString();
  }

  get value(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BoolSet extends ethereum.Event {
  get params(): BoolSet__Params {
    return new BoolSet__Params(this);
  }
}

export class BoolSet__Params {
  _event: BoolSet;

  constructor(event: BoolSet) {
    this._event = event;
  }

  get originContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get key(): string {
    return this._event.parameters[1].value.toString();
  }

  get value(): boolean {
    return this._event.parameters[2].value.toBoolean();
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

export class StringAdd extends ethereum.Event {
  get params(): StringAdd__Params {
    return new StringAdd__Params(this);
  }
}

export class StringAdd__Params {
  _event: StringAdd;

  constructor(event: StringAdd) {
    this._event = event;
  }

  get originAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get key(): string {
    return this._event.parameters[1].value.toString();
  }

  get value(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class StringRemoved extends ethereum.Event {
  get params(): StringRemoved__Params {
    return new StringRemoved__Params(this);
  }
}

export class StringRemoved__Params {
  _event: StringRemoved;

  constructor(event: StringRemoved) {
    this._event = event;
  }

  get originAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get key(): string {
    return this._event.parameters[1].value.toString();
  }

  get value(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class StringSet extends ethereum.Event {
  get params(): StringSet__Params {
    return new StringSet__Params(this);
  }
}

export class StringSet__Params {
  _event: StringSet;

  constructor(event: StringSet) {
    this._event = event;
  }

  get originAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get key(): string {
    return this._event.parameters[1].value.toString();
  }

  get value(): string {
    return this._event.parameters[2].value.toString();
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

export class OpenRepo extends ethereum.SmartContract {
  static bind(address: Address): OpenRepo {
    return new OpenRepo("OpenRepo", address);
  }

  addressGet(key: string): Address {
    let result = super.call("addressGet", "addressGet(string):(address)", [
      ethereum.Value.fromString(key)
    ]);

    return result[0].toAddress();
  }

  try_addressGet(key: string): ethereum.CallResult<Address> {
    let result = super.tryCall("addressGet", "addressGet(string):(address)", [
      ethereum.Value.fromString(key)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  addressGetAll(key: string): Array<Address> {
    let result = super.call(
      "addressGetAll",
      "addressGetAll(string):(address[])",
      [ethereum.Value.fromString(key)]
    );

    return result[0].toAddressArray();
  }

  try_addressGetAll(key: string): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "addressGetAll",
      "addressGetAll(string):(address[])",
      [ethereum.Value.fromString(key)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  addressGetAllOf(originContract: Address, key: string): Array<Address> {
    let result = super.call(
      "addressGetAllOf",
      "addressGetAllOf(address,string):(address[])",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key)
      ]
    );

    return result[0].toAddressArray();
  }

  try_addressGetAllOf(
    originContract: Address,
    key: string
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "addressGetAllOf",
      "addressGetAllOf(address,string):(address[])",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  addressGetIndex(key: string, index: BigInt): Address {
    let result = super.call(
      "addressGetIndex",
      "addressGetIndex(string,uint256):(address)",
      [ethereum.Value.fromString(key), ethereum.Value.fromUnsignedBigInt(index)]
    );

    return result[0].toAddress();
  }

  try_addressGetIndex(
    key: string,
    index: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "addressGetIndex",
      "addressGetIndex(string,uint256):(address)",
      [ethereum.Value.fromString(key), ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  addressGetIndexOf(
    originContract: Address,
    key: string,
    index: BigInt
  ): Address {
    let result = super.call(
      "addressGetIndexOf",
      "addressGetIndexOf(address,string,uint256):(address)",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_addressGetIndexOf(
    originContract: Address,
    key: string,
    index: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "addressGetIndexOf",
      "addressGetIndexOf(address,string,uint256):(address)",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  addressGetOf(originContract: Address, key: string): Address {
    let result = super.call(
      "addressGetOf",
      "addressGetOf(address,string):(address)",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key)
      ]
    );

    return result[0].toAddress();
  }

  try_addressGetOf(
    originContract: Address,
    key: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "addressGetOf",
      "addressGetOf(address,string):(address)",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  addressHas(key: string, targetAddress: Address): boolean {
    let result = super.call("addressHas", "addressHas(string,address):(bool)", [
      ethereum.Value.fromString(key),
      ethereum.Value.fromAddress(targetAddress)
    ]);

    return result[0].toBoolean();
  }

  try_addressHas(
    key: string,
    targetAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addressHas",
      "addressHas(string,address):(bool)",
      [
        ethereum.Value.fromString(key),
        ethereum.Value.fromAddress(targetAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  addressHasOf(
    originContract: Address,
    key: string,
    targetAddress: Address
  ): boolean {
    let result = super.call(
      "addressHasOf",
      "addressHasOf(address,string,address):(bool)",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key),
        ethereum.Value.fromAddress(targetAddress)
      ]
    );

    return result[0].toBoolean();
  }

  try_addressHasOf(
    originContract: Address,
    key: string,
    targetAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addressHasOf",
      "addressHasOf(address,string,address):(bool)",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key),
        ethereum.Value.fromAddress(targetAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  boolGet(key: string): boolean {
    let result = super.call("boolGet", "boolGet(string):(bool)", [
      ethereum.Value.fromString(key)
    ]);

    return result[0].toBoolean();
  }

  try_boolGet(key: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("boolGet", "boolGet(string):(bool)", [
      ethereum.Value.fromString(key)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  boolGetAll(key: string): Array<boolean> {
    let result = super.call("boolGetAll", "boolGetAll(string):(bool[])", [
      ethereum.Value.fromString(key)
    ]);

    return result[0].toBooleanArray();
  }

  try_boolGetAll(key: string): ethereum.CallResult<Array<boolean>> {
    let result = super.tryCall("boolGetAll", "boolGetAll(string):(bool[])", [
      ethereum.Value.fromString(key)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBooleanArray());
  }

  boolGetIndex(key: string, index: BigInt): boolean {
    let result = super.call(
      "boolGetIndex",
      "boolGetIndex(string,uint256):(bool)",
      [ethereum.Value.fromString(key), ethereum.Value.fromUnsignedBigInt(index)]
    );

    return result[0].toBoolean();
  }

  try_boolGetIndex(key: string, index: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "boolGetIndex",
      "boolGetIndex(string,uint256):(bool)",
      [ethereum.Value.fromString(key), ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  boolGetIndexOf(originContract: Address, key: string, index: BigInt): boolean {
    let result = super.call(
      "boolGetIndexOf",
      "boolGetIndexOf(address,string,uint256):(bool)",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBoolean();
  }

  try_boolGetIndexOf(
    originContract: Address,
    key: string,
    index: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "boolGetIndexOf",
      "boolGetIndexOf(address,string,uint256):(bool)",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  boolGetOf(originContract: Address, key: string): boolean {
    let result = super.call("boolGetOf", "boolGetOf(address,string):(bool)", [
      ethereum.Value.fromAddress(originContract),
      ethereum.Value.fromString(key)
    ]);

    return result[0].toBoolean();
  }

  try_boolGetOf(
    originContract: Address,
    key: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "boolGetOf",
      "boolGetOf(address,string):(bool)",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  stringGet(key: string): string {
    let result = super.call("stringGet", "stringGet(string):(string)", [
      ethereum.Value.fromString(key)
    ]);

    return result[0].toString();
  }

  try_stringGet(key: string): ethereum.CallResult<string> {
    let result = super.tryCall("stringGet", "stringGet(string):(string)", [
      ethereum.Value.fromString(key)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  stringGetAll(key: string): Array<string> {
    let result = super.call("stringGetAll", "stringGetAll(string):(string[])", [
      ethereum.Value.fromString(key)
    ]);

    return result[0].toStringArray();
  }

  try_stringGetAll(key: string): ethereum.CallResult<Array<string>> {
    let result = super.tryCall(
      "stringGetAll",
      "stringGetAll(string):(string[])",
      [ethereum.Value.fromString(key)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toStringArray());
  }

  stringGetIndex(key: string, index: BigInt): string {
    let result = super.call(
      "stringGetIndex",
      "stringGetIndex(string,uint256):(string)",
      [ethereum.Value.fromString(key), ethereum.Value.fromUnsignedBigInt(index)]
    );

    return result[0].toString();
  }

  try_stringGetIndex(key: string, index: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "stringGetIndex",
      "stringGetIndex(string,uint256):(string)",
      [ethereum.Value.fromString(key), ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  stringGetIndexOf(
    originContract: Address,
    key: string,
    index: BigInt
  ): string {
    let result = super.call(
      "stringGetIndexOf",
      "stringGetIndexOf(address,string,uint256):(string)",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toString();
  }

  try_stringGetIndexOf(
    originContract: Address,
    key: string,
    index: BigInt
  ): ethereum.CallResult<string> {
    let result = super.tryCall(
      "stringGetIndexOf",
      "stringGetIndexOf(address,string,uint256):(string)",
      [
        ethereum.Value.fromAddress(originContract),
        ethereum.Value.fromString(key),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  stringGetOf(ownerAddr: Address, key: string): string {
    let result = super.call(
      "stringGetOf",
      "stringGetOf(address,string):(string)",
      [ethereum.Value.fromAddress(ownerAddr), ethereum.Value.fromString(key)]
    );

    return result[0].toString();
  }

  try_stringGetOf(
    ownerAddr: Address,
    key: string
  ): ethereum.CallResult<string> {
    let result = super.tryCall(
      "stringGetOf",
      "stringGetOf(address,string):(string)",
      [ethereum.Value.fromAddress(ownerAddr), ethereum.Value.fromString(key)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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
}

export class AddressAddCall extends ethereum.Call {
  get inputs(): AddressAddCall__Inputs {
    return new AddressAddCall__Inputs(this);
  }

  get outputs(): AddressAddCall__Outputs {
    return new AddressAddCall__Outputs(this);
  }
}

export class AddressAddCall__Inputs {
  _call: AddressAddCall;

  constructor(call: AddressAddCall) {
    this._call = call;
  }

  get key(): string {
    return this._call.inputValues[0].value.toString();
  }

  get value(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddressAddCall__Outputs {
  _call: AddressAddCall;

  constructor(call: AddressAddCall) {
    this._call = call;
  }
}

export class AddressRemoveCall extends ethereum.Call {
  get inputs(): AddressRemoveCall__Inputs {
    return new AddressRemoveCall__Inputs(this);
  }

  get outputs(): AddressRemoveCall__Outputs {
    return new AddressRemoveCall__Outputs(this);
  }
}

export class AddressRemoveCall__Inputs {
  _call: AddressRemoveCall;

  constructor(call: AddressRemoveCall) {
    this._call = call;
  }

  get key(): string {
    return this._call.inputValues[0].value.toString();
  }

  get value(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddressRemoveCall__Outputs {
  _call: AddressRemoveCall;

  constructor(call: AddressRemoveCall) {
    this._call = call;
  }
}

export class AddressSetCall extends ethereum.Call {
  get inputs(): AddressSetCall__Inputs {
    return new AddressSetCall__Inputs(this);
  }

  get outputs(): AddressSetCall__Outputs {
    return new AddressSetCall__Outputs(this);
  }
}

export class AddressSetCall__Inputs {
  _call: AddressSetCall;

  constructor(call: AddressSetCall) {
    this._call = call;
  }

  get key(): string {
    return this._call.inputValues[0].value.toString();
  }

  get value(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddressSetCall__Outputs {
  _call: AddressSetCall;

  constructor(call: AddressSetCall) {
    this._call = call;
  }
}

export class BoolAddCall extends ethereum.Call {
  get inputs(): BoolAddCall__Inputs {
    return new BoolAddCall__Inputs(this);
  }

  get outputs(): BoolAddCall__Outputs {
    return new BoolAddCall__Outputs(this);
  }
}

export class BoolAddCall__Inputs {
  _call: BoolAddCall;

  constructor(call: BoolAddCall) {
    this._call = call;
  }

  get key(): string {
    return this._call.inputValues[0].value.toString();
  }

  get value(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class BoolAddCall__Outputs {
  _call: BoolAddCall;

  constructor(call: BoolAddCall) {
    this._call = call;
  }
}

export class BoolRemoveCall extends ethereum.Call {
  get inputs(): BoolRemoveCall__Inputs {
    return new BoolRemoveCall__Inputs(this);
  }

  get outputs(): BoolRemoveCall__Outputs {
    return new BoolRemoveCall__Outputs(this);
  }
}

export class BoolRemoveCall__Inputs {
  _call: BoolRemoveCall;

  constructor(call: BoolRemoveCall) {
    this._call = call;
  }

  get key(): string {
    return this._call.inputValues[0].value.toString();
  }

  get value(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class BoolRemoveCall__Outputs {
  _call: BoolRemoveCall;

  constructor(call: BoolRemoveCall) {
    this._call = call;
  }
}

export class BoolSetCall extends ethereum.Call {
  get inputs(): BoolSetCall__Inputs {
    return new BoolSetCall__Inputs(this);
  }

  get outputs(): BoolSetCall__Outputs {
    return new BoolSetCall__Outputs(this);
  }
}

export class BoolSetCall__Inputs {
  _call: BoolSetCall;

  constructor(call: BoolSetCall) {
    this._call = call;
  }

  get key(): string {
    return this._call.inputValues[0].value.toString();
  }

  get value(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class BoolSetCall__Outputs {
  _call: BoolSetCall;

  constructor(call: BoolSetCall) {
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

export class StringAddCall extends ethereum.Call {
  get inputs(): StringAddCall__Inputs {
    return new StringAddCall__Inputs(this);
  }

  get outputs(): StringAddCall__Outputs {
    return new StringAddCall__Outputs(this);
  }
}

export class StringAddCall__Inputs {
  _call: StringAddCall;

  constructor(call: StringAddCall) {
    this._call = call;
  }

  get key(): string {
    return this._call.inputValues[0].value.toString();
  }

  get value(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class StringAddCall__Outputs {
  _call: StringAddCall;

  constructor(call: StringAddCall) {
    this._call = call;
  }
}

export class StringRemoveCall extends ethereum.Call {
  get inputs(): StringRemoveCall__Inputs {
    return new StringRemoveCall__Inputs(this);
  }

  get outputs(): StringRemoveCall__Outputs {
    return new StringRemoveCall__Outputs(this);
  }
}

export class StringRemoveCall__Inputs {
  _call: StringRemoveCall;

  constructor(call: StringRemoveCall) {
    this._call = call;
  }

  get key(): string {
    return this._call.inputValues[0].value.toString();
  }

  get value(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class StringRemoveCall__Outputs {
  _call: StringRemoveCall;

  constructor(call: StringRemoveCall) {
    this._call = call;
  }
}

export class StringSetCall extends ethereum.Call {
  get inputs(): StringSetCall__Inputs {
    return new StringSetCall__Inputs(this);
  }

  get outputs(): StringSetCall__Outputs {
    return new StringSetCall__Outputs(this);
  }
}

export class StringSetCall__Inputs {
  _call: StringSetCall;

  constructor(call: StringSetCall) {
    this._call = call;
  }

  get key(): string {
    return this._call.inputValues[0].value.toString();
  }

  get value(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class StringSetCall__Outputs {
  _call: StringSetCall;

  constructor(call: StringSetCall) {
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