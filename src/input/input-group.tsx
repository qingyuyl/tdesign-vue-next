import { defineComponent, computed } from 'vue';
import { usePrefixClass } from '../hooks/useConfig';
import { useTNodeJSX } from '../hooks/tnode';

export default defineComponent({
  name: 'TInputGroup',
  props: {
    separate: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const COMPONENT_NAME = usePrefixClass('input-group');
    const renderTNodeJSX = useTNodeJSX();
    const CLASS = computed(() => [
      COMPONENT_NAME.value,
      {
        [`${COMPONENT_NAME.value}--separate`]: props.separate,
      },
    ]);
    return () => <div class={CLASS.value}>{renderTNodeJSX('default')}</div>;
  },
});
