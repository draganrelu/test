// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: ssCuor2xJoLhzK
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_play_plasmic_levels_start_here.module.css"; // plasmic-import: fiUhXe8Zsj5ebqGZX94BP2/projectcss
import * as sty from "./PlasmicAccentButton.module.css"; // plasmic-import: ssCuor2xJoLhzK/css

export const PlasmicAccentButton__VariantProps = new Array();

export const PlasmicAccentButton__ArgProps = new Array();

function PlasmicAccentButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        defaultcss.__wab_text,
        projectcss.root_reset,
        sty.root
      )}
    >
      {"Click me"}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAccentButton__ArgProps,
      internalVariantPropNames: PlasmicAccentButton__VariantProps
    });

    return PlasmicAccentButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccentButton";
  } else {
    func.displayName = `PlasmicAccentButton.${nodeName}`;
  }
  return func;
}

export const PlasmicAccentButton = Object.assign(
  // Top-level PlasmicAccentButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicAccentButton
    internalVariantProps: PlasmicAccentButton__VariantProps,
    internalArgProps: PlasmicAccentButton__ArgProps
  }
);

export default PlasmicAccentButton;
/* prettier-ignore-end */
