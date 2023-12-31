<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'orderState'">
          <div>
            {{ orderStatusMap[text] }}
          </div>
        </template>
        <template v-else-if="column.key === 'notifyState'">
          <div>
            {{ notifyStateMap[text] }}
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
              {
                icon: 'clarity:note-edit-line',
                label: '审核',
                onClick: handleReviewEdit.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                label: '回调',
                tooltip: '回调',
                popConfirm: {
                  title: '是否确认进行该操作',
                  placement: 'left',
                  confirm: handleCallback.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ReceiveDetailsModal @register="registerModal" @success="reload" />
    <ReceiveReviewModal @register="registerReviewModal" @success="reload" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getOrderListApi, OrderNotifyApi } from '/@/api/page';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import ReceiveDetailsModal from './ReceiveDetailsModal.vue';
  import ReceiveReviewModal from './ReceiveReviewModal.vue';
  import { columns, searchFormSchema, orderState, notifyState } from './receive.data';

  export default defineComponent({
    name: 'InOrderPage',
    components: { BasicTable, PageWrapper, TableAction, ReceiveDetailsModal, ReceiveReviewModal },
    setup() {
      const { t } = useI18n();
      const { createMessage } = useMessage();
      const [registerModal, { openModal }] = useModal();
      const [registerReviewModal, { openModal: openReviewModel }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, setLoading }] = useTable({
        title: '商户收款订单',
        api: getOrderListApi,
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
          width: 250,
          title: '操作',
          dataIndex: 'action',
        },
      });

      const orderStatusMap = reactive(orderState);

      const notifyStateMap = reactive(notifyState);

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleReviewEdit(record: Recordable) {
        openReviewModel(true, { record });
      }

      async function handleCallback(record: Recordable) {
        try {
          setLoading(true);
          await OrderNotifyApi({ pOrderId: record.pOrderId });
          createMessage.success(t('layout.setting.operatingTitle'));
          reload();
        } catch (error) {
        } finally {
          setLoading(false);
        }
      }
      return {
        registerTable,
        registerModal,
        handleEdit,
        handleDelete,
        reload,
        registerReviewModal,
        handleReviewEdit,
        handleCallback,
        searchInfo,
        orderStatusMap,
        notifyStateMap,
      };
    },
  });
</script>
