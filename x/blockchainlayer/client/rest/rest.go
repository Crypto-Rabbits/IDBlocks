package rest

import (
	"github.com/gorilla/mux"
	"fmt"
  	"net/http"
  	"github.com/cosmos/cosmos-sdk/types/rest"
	"github.com/cosmos/cosmos-sdk/client/context"
)

// RegisterRoutes registers blockchainlayer-related REST handlers to a router
func RegisterRoutes(cliCtx context.CLIContext, r *mux.Router) {
	r.HandleFunc("/blockchainlayer/posts", listPostHandler(cliCtx, "blog")).Methods("GET")
	r.HandleFunc("/blockchainlayer/posts", createPostHandler(cliCtx)).Methods("POST")

  // this line is used by starport scaffolding # 1
}

func listPostHandler(cliCtx context.CLIContext, storeName string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		res, _, err := cliCtx.QueryWithData(fmt.Sprintf("custom/%s/list-post", storeName), nil)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusNotFound, err.Error())
			return
		}
		rest.PostProcessResponse(w, cliCtx, res)
	}
}