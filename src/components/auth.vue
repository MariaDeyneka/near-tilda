<script setup lang="ts">
import {ref } from 'vue'
import axios from 'axios'
import * as nearAPI from 'near-api-js'

let account_id = String(params.account)
let near_price = ref()
let balance = ref(0)
let config = ref()
let near = ref()
let wallet = ref()
let account = ref()

const getNEARPrice = async () => {
    // add api
    let result = await axios.get(api)
    return result?.data?.NEAR[0]?.quote?.USD?.price
}
const connectUser = async () => {
  getNEARPrice().then(price => {
      near_price.value = price
      console.log('getNEARPrice result2 $', near_price)
    })

    if (account_id) {
      if (account_id.indexOf('.near') !== -1) {
        config.value = {
          networkId: 'mainnet',
          url: 'https://rpc.mainnet.near.org',
          contract: account_id,
          walletUrl: 'https://wallet.near.org',
        }

        wallet.value = new nearAPI.WalletAccount(near.value)
        account.value = await near.value.account(account_id)
        balance.value = parseFloat(
          nearAPI.utils.format
            .formatNearAmount(
              (await account.value.getAccountBalance())?.available || '0'
            )
            .slice(0, 5)
        )
      }
    }
}
</script>

<template>
  <div class="user">
      <div class="account">
          <!-- click for user account with wallet and balance -->
      </div>
       <div class="balance">
        Available Balance
      </div>

      <div class="buttons">
        <button>
          Send
        </button>
        <button>
          <span>
          </span>
          Claim
        </button>
  </div>
</template>
