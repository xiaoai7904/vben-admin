<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bodyCell="{ column, text }">
        <template v-if="column.key === 'orderState'">
          <div>
            {{ orderState[text] }}
          </div>
        </template>
        <template v-if="column.key === 'op'">
          <div>
            {{ opState[text] }}
          </div>
        </template>
        <template v-if="column.key === 'transactionId'">
          <a :href="'https://tronscan.org/#/transaction/' + text" target="_blank">{{ text }}</a>
        </template>
        <template v-if="column.key === 'image'">
          <Image :src="text" class="table-img" />
        </template>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { Image } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getPlayerUsdtOrderListApi } from '/@/api/page';
  import { PageWrapper } from '/@/components/Page';
  import { columns, searchFormSchema, orderState, opState } from './usdt.data';

  export default defineComponent({
    name: 'PlayerUsdtOrderPage',
    components: { BasicTable, PageWrapper, Image },
    setup() {
      const searchInfo = reactive<Recordable>({});
      const [registerTable] = useTable({
        title: 'USDT充值订单管理',
        api: getPlayerUsdtOrderListApi,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        canResize: false,
      });

      return {
        registerTable,
        searchInfo,
        orderState,
        opState,
      };
    },
  });
</script>
