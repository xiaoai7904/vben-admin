<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增USDT钱包</a-button>
      </template>
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'balance'">
          <div>
            <span>{{ text }}</span>
            <Icon icon="clarity:note-edit-line"
          /></div>
        </template>
        <template v-else-if="column.key === 'img'"></template>
        <template v-else-if="column.key === 'action'">
          <TableAction
            :actions="[
              // {
              //   icon: 'clarity:info-standard-line',
              //   tooltip: '查看用户详情',
              //   onClick: handleView.bind(null, record),
              // },
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <UsdtModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import Icon from '/@/components/Icon/index';
  import { getUsdtListApi, DelUsdApi } from '/@/api/page';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import UsdtModal from './UsdtModal.vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { columns, searchFormSchema } from './usdt.data';

  export default defineComponent({
    name: 'USDTPage',
    components: { BasicTable, PageWrapper, UsdtModal, TableAction, Icon },
    setup() {
      const go = useGo();
      const { t } = useI18n();
      const [registerModal, { openModal }] = useModal();
      const { createMessage } = useMessage();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload }] = useTable({
        title: 'USDT钱包管理',
        api: getUsdtListApi,
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
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
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

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
        DelUsdApi({ walletId: record.id }).then(() => {
          createMessage.success(t('layout.setting.operatingTitle'));
          reload();
        });
      }

      function handleSuccess() {
        createMessage.success(t('layout.setting.operatingTitle'));
        reload();
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      function handleView(record: Recordable) {
        go('/system/account_detail/' + record.id);
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleView,
        searchInfo,
      };
    },
  });
</script>
