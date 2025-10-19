import BackBtn from "@/components/menu/back-button/back.button"
import ForwardBn from "@/components/menu/forward-button/forward.button"
import MenuOptions from "@/components/menu/MenuOptions"

function RepasAccueilPage() {
  return (
    <div>
      <section className="flex flex-col items-center">
        <h2 className="font-semibold mb-10">Votre repas</h2>
        <div className="mb-10">
          <MenuOptions />
        </div>
        <ForwardBn />
        <BackBtn />
      </section>
    </div>
  )
}

export default RepasAccueilPage