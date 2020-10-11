package blockchainlayer

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/Crypto-Rabbits/IDBlocks/blockchain-layer/x/blockchainlayer/keeper"
	"github.com/Crypto-Rabbits/IDBlocks/blockchain-layer/x/blockchainlayer/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// NewHandler ...
func NewHandler(k keeper.Keeper) sdk.Handler {
	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())
		switch msg := msg.(type) {
		// this line is used by starport scaffolding
		//case types.MsgCreateComment:
			//return handleMsgCreateComment(ctx, k, msg)
		case types.MsgCreatePost:
			return handleMsgCreatePost(ctx, k, msg)
		default:
			errMsg := fmt.Sprintf("unrecognized %s message type: %T", types.ModuleName, msg)
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, errMsg)
		}
	}
}

func handleMsgCreatePost(ctx sdk.Context, k keeper.Keeper, msg types.MsgCreatePost) (*sdk.Result, error) {
	var post = types.Post{
		Creator: msg.Creator,
		ID:      msg.ID,
		Title:   msg.Title,
		Body:    msg.Body,
	}
	k.CreatePost(ctx, post)

	return &sdk.Result{Events: ctx.EventManager().Events()}, nil
}