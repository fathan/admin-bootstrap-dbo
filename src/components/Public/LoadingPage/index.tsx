export default function LoadingPage () {
  return (
    <div className="loading-page-wrapper">
      <main className="px-3">
        <div className="lds-ripple">
          <div />
          <div />
        </div>

        <h4 className="text-secondary">Please wait ...</h4>
      </main>
    </div>
  )
}