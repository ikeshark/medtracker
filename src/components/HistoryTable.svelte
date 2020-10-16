<script>
  export let message;

  function formatDate(epoch) {
    const dateObj = new Date(parseInt(epoch));
    return dateObj.toLocaleDateString('en-US')
  }
  function formatTime(epoch) {
    const dateObj = new Date(parseInt(epoch));
    return dateObj.toLocaleTimeString('en-US', 
    { hour: '2-digit', minute: '2-digit' })
  }
</script>
