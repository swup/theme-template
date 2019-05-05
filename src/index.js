import Theme from '@swup/theme';
import styles from './index.css';

export default class ThemeName extends Theme {
	name = 'ThemeName';

	constructor(options) {
		super();

		const defaultOptions = {
			mainElement: '#swup'
		};

		this.options = {
			...defaultOptions,
			...options
		};
	}

	mount() {
		// apply imported styles
		this.applyStyles(styles);

		// add classname to
		this.addClassName(this.options.mainElement, 'main');

		// add HTML structure to body if needed
		this.applyHTML('<div></div>');
	}
}
