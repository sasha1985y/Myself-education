export const updateHeader = (title: string | null) => {
  document.querySelector('#current-value')
    .textContent = title;
};
