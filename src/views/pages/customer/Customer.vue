<template>
  <PageWrapper dense contentFullHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增客服</a-button>
      </template>
      <template #bodyCell="{ column, record, text }">
        <!-- <template v-if="column.key === 'balance'">
          <div @click="updateBalance">
            <span>{{ text }}&nbsp;&nbsp;</span>
            <Icon icon="ant-design:reload-outlined"
          /></div>
        </template> -->
        <template v-if="column.key === 'avatar'">
          <Image :src="text" class="table-img" />
        </template>
        <template v-else-if="column.key === 'state'">
          <Switch :checked="text === 1" @change="handleStateEdit(record)" />
        </template>
        <template v-else-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                label: '编辑',
                tooltip: '编辑',
                onClick: handleEdit.bind(null, record),
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
    <CustomerModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  // import Icon from '/@/components/Icon/index';
  import { Image, Switch } from 'ant-design-vue';
  import { getCustomerListApi, DelCustomerApi, EditCustomerApi } from '/@/api/page';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import CustomerModal from './CustomerModal.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { columns, searchFormSchema } from './customer.data';

  export default defineComponent({
    name: 'CustomerPage',
    components: { BasicTable, PageWrapper, CustomerModal, TableAction, Image, Switch },
    setup() {
      const { t } = useI18n();
      const [registerModal, { openModal }] = useModal();
      const { createMessage } = useMessage();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, setLoading }] = useTable({
        title: '客服管理',
        api: getCustomerListApi,
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
        actionColumn: {
          width: 200,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });
      const balanceLoading = ref(false);

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
        DelCustomerApi({ customerId: record.id }).then(() => {
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

      async function handleStateEdit(record: Recordable) {
        try {
          setLoading(true);
          await EditCustomerApi({ customerId: record.id, state: record.state === 1 ? 0 : 1 });
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
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleStateEdit,
        searchInfo,
        balanceLoading,
      };
    },
  });
</script>
./banner.data
