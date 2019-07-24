import { useDispatch } from 'react-redux';

/**
 * Dispatch asynchronous action and shows the progress of the action.
 *
 * @param {function} asyncAction
 * @param {function} callback
 * @param {Object} opts
 * @return {function} asyncDispatchAction
 */
export const useAsyncDispatch = (asyncAction, callback, opts = { showProgress: null, hideProgress: null }) => {
	const dispatch = useDispatch();
	if (typeof asyncAction !== 'function') {
		return;
	}
	const asyncDispatchAction = async (params) => {
		const { showProgress, hideProgress } = opts;
		if (showProgress && typeof showProgress === 'function') {
			dispatch(showProgress());
		}
		try {
			const result = await dispatch(asyncAction(params));
			if (callback && typeof callback === 'function') {
				callback(result);
			}
			return result;
		} finally {
			if (showProgress && typeof showProgress === 'function') {
				dispatch(hideProgress());
			}
		}
	};
	return asyncDispatchAction;
};
