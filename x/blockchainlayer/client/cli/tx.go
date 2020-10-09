package cli

import (

	"bufio"
  	"github.com/cosmos/cosmos-sdk/client/context"
  	"github.com/cosmos/cosmos-sdk/x/auth"
  	"github.com/cosmos/cosmos-sdk/x/auth/client/utils"
  	sdk "github.com/cosmos/cosmos-sdk/types"
	"fmt"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/Crypto-Rabbits/IDBlocks/blockchain-layer/x/blockchainlayer/types"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd(cdc *codec.Codec) *cobra.Command {
	blockchainlayerTxCmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	blockchainlayerTxCmd.AddCommand(flags.PostCommands(
		GetCmdCreatePost(cdc),
    // this line is used by starport scaffolding # 1
	)...)

	return blockchainlayerTxCmd
}

func GetCmdCreatePost(cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "create-post [title] [body]",
		Short: "Creates a new post",
		Args:  cobra.MinimumNArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsTitle := string(args[0])
			argsBody := string(args[1])

			cliCtx := context.NewCLIContext().WithCodec(cdc)
			inBuf := bufio.NewReader(cmd.InOrStdin())
			txBldr := auth.NewTxBuilderFromCLI(inBuf).WithTxEncoder(utils.GetTxEncoder(cdc))
			msg := types.NewMsgCreatePost(cliCtx.GetFromAddress(), argsTitle, argsBody)
			err := msg.ValidateBasic()
			if err != nil {
				return err
			}
			return utils.GenerateOrBroadcastMsgs(cliCtx, txBldr, []sdk.Msg{msg})
		},
	}
}