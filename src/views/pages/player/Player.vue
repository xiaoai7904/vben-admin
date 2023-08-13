<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'state'">
          <div>
            <Switch :checked="text === 1" @change="handleStateEdit(record)" />
          </div>
        </template>
        <template v-else-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:credit-card-outlined',
                label: '充值记录',
                onClick: handleRechrage.bind(null, record),
              },
              {
                icon: 'ant-design:transaction-outlined',
                label: '资金变更',
                onClick: handleFundsChangeEdit.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <PlayerRechargeModal @register="registerModal" @success="handleSuccess" />
    <PlayerFundsChangeModal
      @register="registerFundsChangeModal"
      @success="handleFundsChangeSuccess"
    />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { Switch } from 'ant-design-vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  // import Icon from '/@/components/Icon/index';
  import { getPlayerListApi, updatePlayerStatusApi } from '/@/api/page';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import PlayerRechargeModal from './PlayerRechargeModal.vue';
  import PlayerFundsChangeModal from './PlayerFundsChangeModal.vue';
  import { columns, searchFormSchema } from './player.data';

  export default defineComponent({
    name: 'PlayerPage',
    components: {
      BasicTable,
      PageWrapper,
      TableAction,
      PlayerRechargeModal,
      PlayerFundsChangeModal,
      Switch,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerFundsChangeModal, { openModal: openFundsChangeModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, setLoading }] = useTable({
        title: '玩家列表',
        api: getPlayerListApi,
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
          width: 220,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleRechrage(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleSuccess() {
        reload();
      }

      function handleFundsChangeEdit(record: Recordable) {
        openFundsChangeModal(true, {
          record,
        });
      }

      function handleFundsChangeSuccess() {
        reload();
      }

      async function handleStateEdit(record: Recordable) {
        try {
          setLoading(true);
          await updatePlayerStatusApi({ userId: record.id, state: record.state === 1 ? 0 : 1 });
          reload();
        } catch (error) {
        } finally {
          setLoading(false);
        }
        console.log(record);
      }

      return {
        registerTable,
        registerModal,
        registerFundsChangeModal,
        handleCreate,
        handleRechrage,
        handleSuccess,
        handleFundsChangeEdit,
        handleFundsChangeSuccess,
        handleStateEdit,
        searchInfo,
      };
    },
  });
</script>
