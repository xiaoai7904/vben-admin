<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, text }">
        <template v-if="column.key === 'type'">
          <div>
            {{ typeMap[text] }}
          </div>
        </template>
      </template>
    </BasicTable>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicTable, useTable } from '/@/components/Table';
  import { playerRechargeApi } from '/@/api/page';
  import { rechargeColumns, typeMap } from './player.data';

  export default defineComponent({
    name: 'PlayerRechargeModal',
    components: { BasicModal, BasicTable },
    setup(_) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const userName = ref('');

      const [registerTable, { reload }] = useTable({
        title: '',
        api: playerRechargeApi,
        rowKey: 'id',
        canResize: false,
        columns: rechargeColumns,
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

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          userName.value = data.record.phone;
          reload();
        }
      });

      const getTitle = computed(() => `${userName.value} 充值记录`);

      function handleSubmit() {
        closeModal();
      }

      return { registerModal, registerTable, getTitle, handleSubmit, typeMap };
    },
  });
</script>
