export function getElementSize(ele) {
    const styles = window.getComputedStyle(ele);
    const height = ele.clientHeight - parseFloat(styles.paddingTop)
        - parseFloat(styles.paddingBottom);
    const width = ele.clientWidth - parseFloat(styles.paddingLeft)
        - parseFloat(styles.paddingRight);
        console.log({ w: width, h: height ,top:ele.offsetTop,left:ele.offsetLeft});
    return { w: width, h: height ,top:ele.offsetTop,left:ele.offsetLeft};
}
