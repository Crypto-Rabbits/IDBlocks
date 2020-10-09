package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
)

// RegisterCodec registers concrete types on codec
func RegisterCodec(cdc *codec.Codec) {
	//cdc.RegisterConcrete(MsgCreateComment{}, "blockchainlayer/CreateComment", nil)
	cdc.RegisterConcrete(MsgCreatePost{}, "blockchainlayer/CreatePost", nil)
	// this line is used by starport scaffolding # 1
}

// ModuleCdc defines the module codec
var ModuleCdc *codec.Codec

func init() {
	ModuleCdc = codec.New()
	RegisterCodec(ModuleCdc)
	codec.RegisterCrypto(ModuleCdc)
	ModuleCdc.Seal()
}
