import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import FeedViewer from "../components/FeedViewer";
import { fetchImages } from "../api/services";

jest.mock("../api/services", () => ({
  fetchImages: jest.fn(),
}));

describe("Testing FeedViewer component", () => {
  test("Render images when they are fetched", async () => {
    // Actual mockUp payload from Flickr
    const mockImages = [
      {
        title: "1930 Ford A Coupe",
        link: "https://www.flickr.com/photos/davydutchy/53008194356/",
        media: {
          m: "https://live.staticflickr.com/65535/53008194356_eab40f1895_m.jpg",
        },
        date_taken: "2023-05-20T14:05:34-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/davydutchy/">Davydutchy</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/davydutchy/53008194356/" title="1930 Ford A Coupe"><img src="https://live.staticflickr.com/65535/53008194356_eab40f1895_m.jpg" width="240" height="160" alt="1930 Ford A Coupe" /></a></p> <p>1930 Ford A Coupe seen in Friesland\'s most prestigious classic car ride, the Elfstedentocht.</p> ',
        published: "2023-06-28T17:14:36Z",
        author: 'nobody@flickr.com ("Davydutchy")',
        author_id: "42057291@N00",
        tags: "boalsert bolsward fryslân friesland frisia frise nederlân nederland netherlands niederlande paysbas holland elfstedentocht oldtimer classic klassiek klassiker veterán auto automobiel automobile car vehicle voiture bil автомобіль אוטו αυτοκίνητο tocht ride rit rally tour fahrt tur rondrit ford a modela aford typea usa american may 2023",
      },
      {
        title: "1930 Ford Model A",
        link: "https://www.flickr.com/photos/davydutchy/53008194711/",
        media: {
          m: "https://live.staticflickr.com/65535/53008194711_17c7f3995d_m.jpg",
        },
        date_taken: "2023-05-20T14:05:30-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/davydutchy/">Davydutchy</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/davydutchy/53008194711/" title="1930 Ford Model A"><img src="https://live.staticflickr.com/65535/53008194711_17c7f3995d_m.jpg" width="240" height="160" alt="1930 Ford Model A" /></a></p> <p>1930 Ford Model A seen in Friesland\'s most prestigious classic car ride, the Elfstedentocht.</p> ',
        published: "2023-06-28T17:14:35Z",
        author: 'nobody@flickr.com ("Davydutchy")',
        author_id: "42057291@N00",
        tags: "boalsert bolsward fryslân friesland frisia frise nederlân nederland netherlands niederlande paysbas holland elfstedentocht oldtimer classic klassiek klassiker veterán auto automobiel automobile car vehicle voiture bil автомобіль אוטו αυτοκίνητο tocht ride rit rally tour fahrt tur rondrit ford a modela aford typea usa american convertible cabriolet cabrio décapotable ragtop may 2023",
      },
      {
        title: "1930 Ford Model A",
        link: "https://www.flickr.com/photos/davydutchy/53008679468/",
        media: {
          m: "https://live.staticflickr.com/65535/53008679468_a4fcb9dd0c_m.jpg",
        },
        date_taken: "2023-05-20T14:05:25-08:00",
        description:
          ' <p><a href="https://www.flickr.com/people/davydutchy/">Davydutchy</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/davydutchy/53008679468/" title="1930 Ford Model A"><img src="https://live.staticflickr.com/65535/53008679468_a4fcb9dd0c_m.jpg" width="240" height="160" alt="1930 Ford Model A" /></a></p> <p>1930 Ford Model seen in Friesland\'s most prestigious classic car ride, the Elfstedentocht.</p> ',
        published: "2023-06-28T17:14:34Z",
        author: 'nobody@flickr.com ("Davydutchy")',
        author_id: "42057291@N00",
        tags: "boalsert bolsward fryslân friesland frisia frise nederlân nederland netherlands niederlande paysbas holland elfstedentocht oldtimer classic klassiek klassiker veterán auto automobiel automobile car vehicle voiture bil автомобіль אוטו αυτοκίνητο tocht ride rit rally tour fahrt tur rondrit ford a modela aford typea usa american may 2023",
      },
    ];

    fetchImages.mockResolvedValueOnce(mockImages);

    const { getByLabelText, getByRole, getByAltText } = render(<FeedViewer />);

    // mock texfield and button to enter a value and trigger the action
    getByLabelText("search feed").value = "test";
    getByRole("button", { "aria-label": "search" });

    // wait for every images to be loadded
    waitFor(() => {
      mockImages.forEach((element) =>
        expect(getByAltText(element["title"]).toBeInTheDocument())
      );
    });
  });
});
