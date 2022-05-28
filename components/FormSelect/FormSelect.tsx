import React from 'react'
import PropTypes from 'prop-types';

const propTypes = {
  /** Make the control disabled */
  disabled: PropTypes.bool,

  /**
   * The `value` attribute of underlying input
   *
   * @controllable onChange
   * */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
  ]),

  /** Options list */
  options: PropTypes.array,

  /**
   * Text Input type
   * @default {false}
   */
  textType: PropTypes.bool,

  /** Field name in the `options` array that should be used for the value. */
  valueField: PropTypes.string,

  /** Field name in the `options` array that should be used for the text label. */
  textField: PropTypes.string,

  /** Placeholder input. */
  placeholder: PropTypes.string,

  /** A callback fired when the `value` prop changes */
  onChange: PropTypes.func,
};

const defaultProps = {
  options: [],
  typeText: false,
};

const FormSelect = () => {
  return (
    <div className="v-form-select">
      {/* <input
        className="v-form-select__input"
        type={props.typeText ? 'text' : 'button'}
        :value="setValue"
        :placeholder="placeholder"
        spellcheck="false"
        @click="dropList()"
        @input="changeText($event.target.value)"
      /> */}
    </div>
  )
}

export default FormSelect