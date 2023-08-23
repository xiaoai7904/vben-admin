<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicTable @register="registerTable" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicTable, useTable } from '/@/components/Table';
  import { AgentRevenueApi } from '/@/api/page';
  import { AgentRevenueModalColums } from './player.data';

  export default defineComponent({
    name: 'PlayerRechargeModal',
    components: { BasicModal, BasicTable },
    setup(_) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const userName = ref('');

      const [registerTable, { reload }] = useTable({
        title: '',
        api: AgentRevenueApi,
        rowKey: 'id',
        canResize: false,
        columns: AgentRevenueModalColums,
        useSearchForm: false,
        immediate: false,
        showTableSetting: true,
        bordered: true,
        beforeFetch(params) {
          return { ...params, ...{ userId: rowId.value } };
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false, width: '80vw' });
        isUpdate.value = !!data?.isUpdate;
        rowId.value = data.record.id;
        userName.value = data.record.phone;
        reload();
      });

      const getTitle = computed(() => `${userName.value} 收益记录`);

      function handleSubmit() {
        closeModal();
      }

      return { registerModal, registerTable, getTitle, handleSubmit };
    },
  });
</script>
