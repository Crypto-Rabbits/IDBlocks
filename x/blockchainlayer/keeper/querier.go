package keeper

import (
  // this line is used by starport scaffolding # 1
	abci "github.com/tendermint/tendermint/abci/types"
	"github.com/Crypto-Rabbits/IDBlocks/blockchain-layer/x/blockchainlayer/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	//"github.com/cosmos/cosmos-sdk/codec"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)




// NewQuerier creates a new querier for blockchainlayer clients.
func NewQuerier(k Keeper) sdk.Querier {
	return func(ctx sdk.Context, path []string, req abci.RequestQuery) ([]byte, error) {
		switch path[0] {
		case types.QueryListPost:
			return listPost(ctx, k)
    // this line is used by starport scaffolding # 2
		default:
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "unknown blockchainlayer query endpoint")
		}
	}
}


