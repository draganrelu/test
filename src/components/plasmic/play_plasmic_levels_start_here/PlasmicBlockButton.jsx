// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: -qLogf7mg_p55n
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_play_plasmic_levels_start_here.module.css"; // plasmic-import: fiUhXe8Zsj5ebqGZX94BP2/projectcss
import * as sty from "./PlasmicBlockButton.module.css"; // plasmic-import: -qLogf7mg_p55n/css
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: mCoEog8Ozs2ToA/icon

export const PlasmicBlockButton__VariantProps = new Array("variants");

export const PlasmicBlockButton__ArgProps = new Array();

function PlasmicBlockButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__variants_following]: hasVariant(
          variants,
          "variants",
          "following"
        )
      })}
    >
      <Icon20Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg, {
          [sty.svg__variants_following]: hasVariant(
            variants,
            "variants",
            "following"
          )
        })}
        role={"img"}
      />

      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, defaultcss.__wab_text, sty.box, {
          [sty.box__variants_following]: hasVariant(
            variants,
            "variants",
            "following"
          )
        })}
      >
        {"Block"}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg", "box"],
  svg: ["svg"],
  box: ["box"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBlockButton__ArgProps,
      internalVariantPropNames: PlasmicBlockButton__VariantProps
    });

    return PlasmicBlockButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlockButton";
  } else {
    func.displayName = `PlasmicBlockButton.${nodeName}`;
  }
  return func;
}

export const PlasmicBlockButton = Object.assign(
  // Top-level PlasmicBlockButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicBlockButton
    internalVariantProps: PlasmicBlockButton__VariantProps,
    internalArgProps: PlasmicBlockButton__ArgProps
  }
);

export default PlasmicBlockButton;
/* prettier-ignore-end */
