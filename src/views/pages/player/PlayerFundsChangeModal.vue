<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { updatePlayerWalletApi } from '/@/api/page';

  export default defineComponent({
    name: 'PlayerFundsChangeModal',
    components: { BasicModal, BasicForm },
    emits: ['success'],
    setup(_, { emit }) {
      const rowId = ref('');
      const userName = ref('');

      const { createMessage } = useMessage();
      const [registerForm, { validate }] = useForm({
        labelWidth: 80,
        showResetButton: false,
        showSubmitButton: false,
        schemas: [
          {
            field: 'amount',
            component: 'InputNumber',
            defaultValue: 0,
            label: '金额',
            colProps: { span: 24 },
          },
        ],
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false });

        rowId.value = data.record.id;
        userName.value = data.record.phone;
      });

      const getTitle = computed(() => `${userName.value}资金变更`);

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);

          await updatePlayerWalletApi({ ...values, userId: rowId.value });

          closeModal();
          createMessage.success('资金变更成功');
          emit('success', {});
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
