import Image from "next/image";
import solo from "@/public/solo.jpg";

export default function Home() {
	return (
		<main>
			<div>
				<h1 className="text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum,
					quas quod animi iusto corrupti repellendus labore, quo minima non
					obcaecati nisi minus veniam, ipsa dolores cupiditate earum. Iste,
					consectetur? Doloribus omnis illum repellendus veniam ducimus earum
					non reprehenderit. Est, et maxime eos ducimus earum reprehenderit
					rerum totam dolor repellendus quam in, id voluptatibus incidunt
					reiciendis tempore laudantium dolorem eius? Corporis quasi magnam,
					architecto in modi sapiente amet mollitia fugiat sit nobis molestiae
					ullam consectetur error unde ut dolor ad corrupti quam repudiandae cum
					eius? Maxime quo eum neque illum. Ut laboriosam cum sunt ratione quis.
					Iste facere quas id, recusandae quos beatae voluptas voluptate, odit
					harum a voluptatibus quibusdam eum dolor nisi obcaecati impedit.
					Consectetur, soluta beatae. Quis, ad. Obcaecati non reprehenderit
					aliquid quia et, ipsa est eius similique quaerat iure illum, libero
					magnam, alias quos distinctio suscipit ipsum ad! Facilis minima
					nostrum ipsa qui blanditiis. Hic, odit in.
				</h1>
			</div>
			<div className="max-w-3xl mb-10">
				<Image src={solo} alt="solo" placeholder="blur"></Image>
			</div>
		</main>
	);
}
