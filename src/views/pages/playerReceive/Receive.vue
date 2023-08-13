<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bodyCell="{ column, record, text }">
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
        <template v-else-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                label: '订单详情',
                onClick: handleEdit.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ReceiveDetailsModal @register="registerModal" @success="reload" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getPlayerOrderListApi } from '/@/api/page';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import ReceiveDetailsModal from './ReceiveDetailsModal.vue';
  import { columns, searchFormSchema, orderState, opState } from './receive.data';

  export default defineComponent({
    name: 'PlayerInOrderPage',
    components: { BasicTable, PageWrapper, TableAction, ReceiveDetailsModal },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload }] = useTable({
        title: '玩家收款订单',
        api: getPlayerOrderListApi,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        canResize: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        actionColumn: {
          width: 150,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      return {
        registerTable,
        registerModal,
        handleEdit,
        reload,
        searchInfo,
        orderState,
        opState,
      };
    },
  });
</script>
