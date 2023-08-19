<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增商户</a-button>
      </template>
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'state'">
          <div>
            {{ text === 1 ? '启用' : '禁用' }}
          </div>
        </template>
        <template v-if="column.key === 'role'">
          <div>
            {{ text === 1 ? '管理员' : '商户' }}
          </div>
        </template>
        <template v-else-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:info-standard-line',
                tooltip: '商户费率',
                label: '商户费率',
                onClick: handleMerchantView.bind(null, record),
              },
              {
                icon: 'ant-design:reload-outlined',
                label: '重置商户密码',
                popConfirm: {
                  title: '是否确认进行该操作',
                  placement: 'left',
                  confirm: handleRestEdit.bind(null, record),
                },
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                label: '删除',
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
    <MerchantModal @register="registerModal" @success="handleSuccess" />
    <MerchantRateModal @register="registerRateModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getMerchantListApi, DelMerchantApi, ResetMerchantApi } from '/@/api/page';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import MerchantModal from './MerchantModal.vue';
  import MerchantRateModal from './MerchantRetaModal.vue';
  import { columns, searchFormSchema } from './merchant.data';

  export default defineComponent({
    name: 'MerchantPage',
    components: { BasicTable, PageWrapper, MerchantModal, MerchantRateModal, TableAction },
    setup() {
      const { t } = useI18n();
      const [registerModal, { openModal }] = useModal();
      const [registerRateModal, { openModal: openRataModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const { createMessage } = useMessage();
      const [registerTable, { reload, setLoading }] = useTable({
        title: '商户管理',
        api: getMerchantListApi,
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
          width: 350,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      async function handleRestEdit(record: Recordable) {
        try {
          setLoading(true);
          await ResetMerchantApi({ accountId: record.id });
          createMessage.success(t('layout.setting.operatingTitle'));
          reload();
        } catch (error) {
        } finally {
          setLoading(false);
        }
      }

      async function handleDelete(record: Recordable) {
        try {
          setLoading(true);
          await DelMerchantApi({ accountId: record.id });
          createMessage.success(t('layout.setting.operatingTitle'));
          reload();
        } catch (error) {
        } finally {
          setLoading(false);
        }
      }

      function handleSuccess() {
        reload();
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      function handleMerchantView(record: Recordable) {
        console.log(record);
        openRataModal(true, {
          record,
          isUpdate: false,
        });
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleDelete,
        handleSuccess,
        handleRestEdit,
        handleSelect,
        handleMerchantView,
        registerRateModal,
        searchInfo,
      };
    },
  });
</script>
