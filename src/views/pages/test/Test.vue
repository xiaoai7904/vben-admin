<template>
  <PageWrapper title="测试页面" contentFullHeight>
    <CollapseContainer title="商户收款下单">
      <BasicForm @register="register" />
      <CodeEditor v-model:value="reusltJson1" mode="application/json" />
    </CollapseContainer>
    <CollapseContainer title="商户付款下单">
      <BasicForm @register="register1" />
      <CodeEditor v-model:value="reusltJson2" mode="application/json" />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { BasicForm, useForm, FormSchema } from '/@/components/Form';
  import { CodeEditor } from '/@/components/CodeEditor';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import { OrderPayTestApi, orderDrawTestApi } from '/@/api/page';

  const schemas: FormSchema[] = [
    {
      field: 'merchantNo',
      component: 'Input',
      label: '商户号',
      defaultValue: '202307118759',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'orderNo',
      component: 'Input',
      label: '订单号',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'amount',
      component: 'Input',
      label: '金额',
      colProps: {
        span: 24,
      },
    },
  ];

  const schemas1: FormSchema[] = [
    {
      field: 'merchantNo',
      component: 'Input',
      label: '商户号',
      defaultValue: '202307118759',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'orderNo',
      component: 'Input',
      label: '订单号',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'amount',
      component: 'Input',
      label: '金额',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'accountName',
      component: 'Input',
      label: '账号名称',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'accountNo',
      component: 'Input',
      label: '账号ID',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'ifsc',
      component: 'Input',
      label: 'ifsc',
      colProps: {
        span: 24,
      },
    },
  ];

  export default defineComponent({
    name: 'TestPage',
    components: { BasicForm, PageWrapper, CollapseContainer, CodeEditor },
    setup() {
      const { createMessage } = useMessage();

      const reusltJson1 = ref('{}');
      const reusltJson2 = ref('{}');

      const [register, { validate, setProps }] = useForm({
        schemas: schemas,
        labelCol: {
          span: 6,
        },
        submitButtonOptions: {
          text: '提交请求',
        },
        actionColOptions: {
          span: 8,
          offset: 16,
        },
        submitFunc: customSubmitFunc,
      });

      const [register1, { validate: validate1, setProps: setProps1 }] = useForm({
        schemas: schemas1,
        labelCol: {
          span: 6,
        },
        submitButtonOptions: {
          text: '提交请求',
        },
        actionColOptions: {
          span: 8,
          offset: 16,
        },
        submitFunc: customSubmitFunc1,
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          const data = await OrderPayTestApi(values);
          console.log(data);
          reusltJson1.value = JSON.stringify(data);
          setProps({
            submitButtonOptions: {
              loading: false,
            },
          });
          init();
          createMessage.success('请求成功');
        } catch (error) {}
      }

      async function customSubmitFunc1() {
        try {
          const values = await validate1();
          setProps1({
            submitButtonOptions: {
              loading: true,
            },
          });
          const data = await orderDrawTestApi(values);
          console.log(data);
          reusltJson2.value = JSON.stringify(data);
          setProps1({
            submitButtonOptions: {
              loading: false,
            },
          });
          createMessage.success('请求成功');
        } catch (error) {}
      }

      return {
        register,
        register1,
        reusltJson1,
        reusltJson2,
      };
    },
  });
</script>
