<template>
  <PageWrapper title="系统配置" contentFullHeight>
    <BasicForm @register="register" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, useForm, FormSchema } from '/@/components/Form';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import { getSettingConfigApi, UpdateSettingConfigApi } from '/@/api/page';

  const schemas: FormSchema[] = [
    {
      field: 'current',
      component: 'Input',
      label: '当前兑换价格',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'wazirx',
      component: 'Input',
      label: 'wazirx交易所价格',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'binance',
      component: 'Input',
      label: 'binance交易所价格',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'coindcx',
      component: 'Input',
      label: 'coindcx交易所价格',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'rate',
      component: 'Input',
      label: 'INR充值点位',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'fee',
      component: 'Input',
      label: 'INR充值单笔',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'confirmExpireTime',
      component: 'Input',
      label: '收款确认有效时间',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'drawExpireTime',
      component: 'Input',
      label: '付款订单有效时间(秒为单位)',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'utrExpireTime',
      component: 'Input',
      label: '提交UTR有效时间(秒为单位)',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'appVersion',
      component: 'Input',
      label: 'APP版本号',
      colProps: {
        span: 24,
      },
    },
  ];

  export default defineComponent({
    name: 'SettingPage',
    components: { BasicForm, PageWrapper },
    setup() {
      const { createMessage } = useMessage();
      const [register, { validate, setProps, setFieldsValue }] = useForm({
        schemas: schemas,
        labelCol: {
          span: 6,
        },
        submitButtonOptions: {
          text: '更新',
        },
        actionColOptions: {
          span: 8,
          offset: 16,
        },
        submitFunc: customSubmitFunc,
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          await UpdateSettingConfigApi(values);
          setProps({
            submitButtonOptions: {
              loading: false,
            },
          });
          init();
          createMessage.success('更新成功');
        } catch (error) {}
      }

      async function init() {
        const result = await getSettingConfigApi({});
        setFieldsValue({ ...result });
      }

      init();

      return {
        register,
      };
    },
  });
</script>
