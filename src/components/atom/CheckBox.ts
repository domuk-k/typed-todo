import { createVnode } from '../../lib';
import { Component } from '../../lib/types';
import styles from './CheckBox.module.scss';

interface IProps {
  id: string;
  checked: boolean;
  textContent: string;
  onToggle: () => Promise<void>;
}

class Checkbox extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { id, checked, textContent, onToggle } = this.props;

    return createVnode(
      'fragment',
      null,
      createVnode('input', {
        type: 'checkbox',
        id,
        className: styles.checkbox,
        checked,
        onchange: onToggle,
      }),
      createVnode('label', {
        type: 'checkbox',
        for: id,
        className: styles.label,
        checked,
        textContent,
      }),
    );
  }
}

export default Checkbox;
