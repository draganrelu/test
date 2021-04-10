// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: YjuFJQ7Ed4rJzF
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_play_plasmic_levels_start_here.module.css"; // plasmic-import: fiUhXe8Zsj5ebqGZX94BP2/projectcss
import * as sty from "./PlasmicCompletedTestimonial.module.css"; // plasmic-import: YjuFJQ7Ed4rJzF/css
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: K81qB-C4BAsTKV/icon
import image45KRvYMq4K9Cf7Yi from "./images/image45.png"; // plasmic-import: KRvYMq4k9cf7YI/picture

export const PlasmicCompletedTestimonial__VariantProps = new Array();

export const PlasmicCompletedTestimonial__ArgProps = new Array();

function PlasmicCompletedTestimonial__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <img
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(defaultcss.img, sty.img)}
        role={"img"}
        src={image45KRvYMq4K9Cf7Yi}
      />

      <Icon28Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg)}
        role={"img"}
      />

      <div className={classNames(defaultcss.all, sty.box__k32Be)}>
        <div className={classNames(defaultcss.all, sty.box__atdz6)}>
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__zfhYc
            )}
          >
            {"Truly revolutionary. An incredible leap forward."}
          </div>
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__rFEyj)}
      >
        <div className={classNames(defaultcss.all, sty.box__zgd8Z)}>
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__s9Z5
            )}
          >
            {"Jane Doe"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__iUsdV
            )}
          >
            {"VP Marketing\nPied Piper"}
          </div>
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "svg"],
  img: ["img"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCompletedTestimonial__ArgProps,
      internalVariantPropNames: PlasmicCompletedTestimonial__VariantProps
    });

    return PlasmicCompletedTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedTestimonial";
  } else {
    func.displayName = `PlasmicCompletedTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedTestimonial = Object.assign(
  // Top-level PlasmicCompletedTestimonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicCompletedTestimonial
    internalVariantProps: PlasmicCompletedTestimonial__VariantProps,
    internalArgProps: PlasmicCompletedTestimonial__ArgProps
  }
);

export default PlasmicCompletedTestimonial;
/* prettier-ignore-end */