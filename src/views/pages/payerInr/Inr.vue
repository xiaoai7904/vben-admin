<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bodyCell="{ column, text }">
        <template v-if="column.key === 'orderState'">
          <div>
            {{ orderState[text] }}
          </div>
        </template>
        <template v-if="column.key === 'image'">
          <img :src="text" />
        </template>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getPlayerInrOrderListApi } from '/@/api/page';
  import { PageWrapper } from '/@/components/Page';
  import { columns, searchFormSchema, orderState } from './inr.data';

  export default defineComponent({
    name: 'PlayerInrOrderPage',
    components: { BasicTable, PageWrapper },
    setup() {
      const searchInfo = reactive<Recordable>({});
      const [registerTable] = useTable({
        title: 'INR充值订单管理',
        api: getPlayerInrOrderListApi,
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
      };
    },
  });
</script>
